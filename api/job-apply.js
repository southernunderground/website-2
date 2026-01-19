const nodemailer = require('nodemailer');
const { formidable } = require('formidable');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  // Initialize formidable
  const form = formidable({
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, // 10MB
  });

  // Parse the form
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ msg: 'Error parsing form data' });
    }

    try {
      // Extract values (formidable v3 returns arrays)
      const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
      const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
      const phone = Array.isArray(fields.phone) ? fields.phone[0] : fields.phone;
      let position = Array.isArray(fields.position) ? fields.position[0] : fields.position;
      const customPosition = Array.isArray(fields.customPosition) ? fields.customPosition[0] : fields.customPosition;
      const experience = Array.isArray(fields.experience) ? fields.experience[0] : fields.experience;
      const message = Array.isArray(fields.message) ? fields.message[0] : fields.message;
      const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;

      // Use custom position if 'other' is selected
      if (position === 'other' && customPosition) {
        position = customPosition;
      }

      if (!resumeFile) {
        return res.status(400).json({ msg: 'Resume file is required' });
      }

      // Formidable v3 uses 'filepath' instead of 'path'
      const resumePath = resumeFile.filepath || resumeFile.path;
      const resumeName = resumeFile.originalFilename || resumeFile.newFilename || 'resume.pdf';

      const html = `
        <h2>New Job Application for: ${position}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Message:</strong><br>${message || 'N/A'}</p>
        <p><strong>Resume:</strong> See attachment</p>
      `;

      // Send to company
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'career@suofla.com',
        subject: `Application for ${position} – ${name}`,
        html,
        attachments: [{
          filename: resumeName,
          path: resumePath
        }]
      });

      // Send confirmation to applicant
      const confirmHtml = `
        <h2>Application Received</h2>
        <p>Hi ${name},</p>
        <p>Thank you for applying for the <strong>${position}</strong> position at Southern Underground.</p>
        <p>We have received your application and our team will review it shortly. If your profile matches our requirements, we will reach out to you with next steps.</p>
        <p>Best regards,<br/>Southern Underground Hiring Team</p>
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: `We received your application for ${position}`,
        html: confirmHtml,
      });

      // Clean up uploaded file
      fs.unlink(resumePath, (unlinkErr) => {
        if (unlinkErr) console.error('Error deleting temp file:', unlinkErr);
      });

      return res.status(200).json({ msg: 'Application submitted successfully!' });

    } catch (error) {
      console.error('Email error:', error);

      // Clean up file if it exists
      const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;
      if (resumeFile) {
        const resumePath = resumeFile.filepath || resumeFile.path;
        fs.unlink(resumePath, () => { });
      }

      return res.status(500).json({
        msg: 'Server error. Please try again.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  });
};