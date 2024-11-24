const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Pronouns: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  DietaryRestrictions: {
    type: String,
    required: true
  },
  ShirtSize: {
    type: String,
    required: true
  }
}, { collection: 'Hacker' }); 

module.exports = mongoose.model('Hacker', FormSchema);

