const nodemailer = require('nodemailer');
const multiparty = require('multiparty');
const fs = require('fs');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  const form = new multiparty.Form();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parse error:', err);
      return res.status(500).json({ msg: 'Error parsing form data' });
    }

    const name = fields.name?.[0];
    const email = fields.email?.[0];
    const phone = fields.phone?.[0];
    const position = fields.position?.[0];
    const experience = fields.experience?.[0];
    const message = fields.message?.[0];
    const resumeFile = files.resume?.[0];

    if (!resumeFile) {
      return res.status(400).json({ msg: 'Resume file is required' });
    }

    try {
      const html = `
        <h2>New Job Application for: ${position}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Message:</strong><br>${message || 'N/A'}</p>
        <p><strong>Resume:</strong> See attachment</p>
      `;

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'career@suofla.com',
        subject: `Application for ${position} – ${name}`,
        html,
        attachments: [{
          filename: resumeFile.originalFilename,
          path: resumeFile.path
        }]
      });

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

      fs.unlink(resumeFile.path, () => {});

      res.json({ msg: 'Application submitted successfully!' });
    } catch (error) {
      console.error('Email error:', error);
      if (resumeFile) fs.unlink(resumeFile.path, () => {});
      res.status(500).json({ msg: 'Server error. Please try again.' });
    }
  });
};
