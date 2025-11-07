const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendJobApplicationEmail({ name, email, phone, position, experience, message, resumeName, sasUrl }) {
  const html = `
    <h2>New Job Application for: ${position}</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Experience:</strong> ${experience}</p>
    <p><strong>Message:</strong><br>${message || 'N/A'}</p>
    <p><strong>Resume:</strong> <a href="${sasUrl}" target="_blank">${resumeName}</a> (valid for 7 days)</p>
  `;

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'career@suofla.com',
    // to: 'kasiparimal@gmail.com',
    subject: `Application for ${position} – ${name}`,
    html,
    attachments: [{
      filename: resumeName,
      path: sasUrl
    }]
  });
}

async function sendApplicantConfirmationEmail({ name, email, position }) {
  const html = `
    <h2>Application Received</h2>
    <p>Hi ${name},</p>
    <p>Thank you for applying for the <strong>${position}</strong> position at Southern Underground.</p>
    <p>We have received your application and our team will review it shortly. If your profile matches our requirements, we will reach out to you with next steps.</p>
    <p>Best regards,<br/>Southern Underground Hiring Team</p>
  `;

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: `We received your application for ${position}`,
    html,
  });
}

async function sendContactSubmissionEmail(contact) {
  const {
    name,
    email,
    phone,
    company,
    service,
    projectType,
    timeline,
    budget,
    message,
  } = contact;

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

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'info@suofla.com',
    // to: 'kasiparimal@gmail.com',
    subject: `New contact request – ${name}`,
    html,
  });
}

module.exports = { sendJobApplicationEmail, sendApplicantConfirmationEmail, sendContactSubmissionEmail };
