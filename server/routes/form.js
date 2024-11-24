const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newForm = new Form({ name, email, message });
    await newForm.save();
    res.status(201).json(newForm);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;