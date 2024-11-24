const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { collection: 'Test' });

module.exports = mongoose.model('Form', FormSchema);