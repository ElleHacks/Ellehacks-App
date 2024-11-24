const express = require('express');
const router = express.Router();
const Hacker = require('../models/Hacker');

// POST :)
router.post('/', async (req, res) => {
  const { FirstName, LastName, Pronouns, Email, DietaryRestrictions, ShirtSize } = req.body;
  try {
    const newHacker = new Hacker({ FirstName, LastName, Pronouns, Email, DietaryRestrictions, ShirtSize });
    await newHacker.save();
    res.status(201).json(newHacker);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
