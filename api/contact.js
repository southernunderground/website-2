const nodemailer = require('nodemailer');

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

  const { name, email, phone, company, service, projectType, timeline, budget, message } = req.body;

  try {
    const html = `
      <h2>New Contact/Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Service Needed:</strong> ${service || 'N/A'}</p>
      <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
      <p><strong>Timeline:</strong> ${timeline || 'N/A'}</p>
      <p><strong>Estimated Budget:</strong> ${budget || 'N/A'}</p>
      <p><strong>Project Details:</strong><br/>${message || 'N/A'}</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'parimalkashireddy1@gmail.com', // Updated recipient
      // to: 'info@suofla.com',
      // to: 'kasiparimal@gmail.com', // Debug
      subject: `New contact request – ${name}`,
      html,
    });

    // Send confirmation email to the user
    const userHtml = `
      <h2>Thank you for contacting Southern Underground</h2>
      <p>Hi ${name},</p>
      <p>We have received your request regarding <strong>${service || 'your project'}</strong>.</p>
      <p>Our team will review your details and get back to you shortly.</p>
      <hr />
      <h3>Your Submission Details:</h3>
      <p><strong>Project Type:</strong> ${projectType || 'N/A'}</p>
      <p><strong>Timeline:</strong> ${timeline || 'N/A'}</p>
      <p><strong>Message:</strong><br/>${message || 'N/A'}</p>
      <br />
      <p>Best regards,<br/>Southern Underground Team</p>
    `;

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: `We received your contact request`,
        html: userHtml,
      });
    } catch (emailErr) {
      console.warn('Failed to send confirmation email to user:', emailErr);
      // Don't fail the request if just the confirmation email fails
    }

    res.status(200).json({ msg: 'Thank you! Your request has been submitted.' });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({
      msg: 'Server error',
      debug: process.env.NODE_ENV === 'development' ? JSON.stringify(err, Object.getOwnPropertyNames(err)) : undefined
    });
  }
};
