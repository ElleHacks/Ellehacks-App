const mongoose = require('mongoose');

const HackerAccountSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true }
}, { collection: 'HackerAccount' });

module.exports = mongoose.model('HackerAccount', HackerAccountSchema);