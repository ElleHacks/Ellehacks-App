const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const HackerAccount = require('../models/HackerAccount');

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const { FirstName, LastName, Email, Password} = req.body;

    const hashedPassword = await bcrypt.hash(Password, 10);

    const hackerAccount = new HackerAccount({
      FirstName,
      LastName,
      Email,
      Password: hashedPassword
    });

    await hackerAccount.save();

    res.status(201).json({ message: 'Hacker account created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;