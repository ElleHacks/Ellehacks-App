const express = require('express');
const router = express.Router();
const HackerAccount = require('../models/HackerAccount'); 


router.get('/:userID', async (req, res) => {
  try {
    const user = await HackerAccount.findById(req.params.userID);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
