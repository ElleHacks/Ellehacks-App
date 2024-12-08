const mongoose = require('mongoose');

const HackerAccountSchema = new mongoose.Schema({
  Status: { type: String, default: "Not Applied" },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  PreferredName: { type: String},
  Email: { type: String, required: true },
  Password: { type: String, required: true }
}, { collection: 'HackerAccount' });

module.exports = mongoose.model('HackerAccount', HackerAccountSchema);