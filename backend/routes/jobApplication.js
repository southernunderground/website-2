const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const { uploadToAzureBlob, generateSASUrl } = require('../services/azureBlobService');
const { sendJobApplicationEmail, sendApplicantConfirmationEmail } = require('../services/emailService');

// Use local /uploads/resumes for temp storage
const upload = multer({
  dest: path.join(__dirname, '../uploads/resumes/'),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB
  fileFilter: (req, file, cb) => {
    const valid = /pdf|doc|docx/;
    const ext = path.extname(file.originalname).toLowerCase();
    if (valid.test(file.mimetype) && valid.test(ext)) cb(null, true);
    else cb(new Error('Only PDF, DOC, DOCX allowed'));
  },
});

router.post('/apply', upload.single('resume'), async (req, res) => {
  const { name, email, phone, position, experience, message } = req.body;
  const resumeFile = req.file;
console.log('📝 Temp file path:', resumeFile?.path);
console.log('📎 Original name:', resumeFile?.originalname);
console.log('📦 MIME type:', resumeFile?.mimetype);

  try {
    if (!resumeFile) return res.status(400).json({ msg: 'Resume file is required' });

    // Upload to Azure Blob
    const blobInfo = await uploadToAzureBlob(
      resumeFile.path,
      resumeFile.originalname,
      resumeFile.mimetype
    );

    // Generate SAS download link
    const sasUrl = generateSASUrl(blobInfo.blobName, 168); // 7 days

    // Send manager email with resume link
    await sendJobApplicationEmail({
      name,
      email,
      phone,
      position,
      experience,
      message,
      resumeName: resumeFile.originalname,
      sasUrl,
    });

    // Send applicant confirmation email (non-blocking)
    sendApplicantConfirmationEmail({ name, email, position }).catch((e) => {
      console.error('⚠️ Failed to send applicant confirmation:', e);
    });

    // Delete local file
    fs.unlink(resumeFile.path, (err) => {
      if (err) console.error('⚠️ Failed to delete temp file:', err);
    });

    res.json({ msg: 'Application submitted successfully!', link: sasUrl });

  } catch (err) {
    console.error('❌ Application failed:', err);
    if (resumeFile) {
      fs.unlink(resumeFile.path, () => {});
    }
    res.status(500).json({ msg: 'Server error. Please try again.' });
  }
});

module.exports = router;
