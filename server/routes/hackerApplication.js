const express = require('express');
const router = express.Router();
const HackerApplication = require('../models/HackerApplication');
const Hacker = require('../models/Hacker');
const HackerAccount = require('../models/HackerAccount');

router.post('/', async (req, res) => {
  
  try {
    console.log(req.body);
    const hackerAccount = await HackerAccount.findOne({ Email: req.body.Email });
    if (!hackerAccount) {
      return res.status(404).json({ message: 'Hacker not found' });
    }

    const newApplication = new HackerApplication({
      ...req.body,
      HackerID: hackerAccount._id
    });

    await newApplication.save();


    const hacker = new Hacker({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email: req.body.Email,
      Pronouns: req.body.Pronouns,
      DietaryRestrictions: req.body.DietaryRestrictions,
      ShirtSize: req.body.ShirtSize
    });

    await hacker.save();

    res.status(201).json(newApplication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;