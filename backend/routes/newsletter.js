const express = require('express');
const router = express.Router();
const NewsletterSubscriber = require('../models/NewsletterSubscriber');

router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ msg: 'Email required' });

    let subscriber = await NewsletterSubscriber.findOne({ email });
    if (subscriber) return res.status(400).json({ msg: 'Email already subscribed' });

    subscriber = new NewsletterSubscriber({ email });
    await subscriber.save();
    res.status(200).json({ msg: 'Subscribed!' });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
