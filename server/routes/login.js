const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const hackerAccountSchema = new mongoose.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Password: String
});

const HackerAccount = mongoose.models.HackerAccount || mongoose.model('HackerAccount', hackerAccountSchema);

router.post('/', async (req, res) => {
  const { Email, Password } = req.body;

  try {
    const user = await HackerAccount.findOne({ Email });

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(Password, user.Password);

    if (!isMatch) {
      console.log('Password does not match');
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ token: 'fake-jwt-token', userID: user._id });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});

module.exports = router;