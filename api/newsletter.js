module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ msg: 'Method not allowed' });
  }

  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ msg: 'Email required' });
  }

  // Without database, just return success
  // You can add email service integration here if needed
  res.status(200).json({ msg: 'Subscribed!' });
};
