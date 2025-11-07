const NewsletterSubscriber = require('../models/NewsletterSubscriber');
const ContactSubmission = require('../models/ContactSubmission');
const express = require('express');
const router = express.Router();
const { sendContactSubmissionEmail } = require('../services/emailService');

router.post('/submit', async (req, res) => {
  try {
    const submission = new ContactSubmission(req.body);
    await submission.save();

    // If newsletter is checked, add to newsletter subscribers
    if (req.body.newsletter && req.body.email) {
      // Only add if not already subscribed
      const existing = await NewsletterSubscriber.findOne({ email: req.body.email });
      if (!existing) {
        const newSub = new NewsletterSubscriber({ email: req.body.email });
        await newSub.save();
      }
    }

    // Send manager notification email (fire-and-forget)
    sendContactSubmissionEmail(req.body).catch((e) => {
      console.error('Failed to send contact notification email:', e);
    });

    res.status(200).json({ msg: 'Thank you! Your request has been submitted.' });
  } catch (err) {
    console.error('Contact form submission error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
