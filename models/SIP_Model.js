const mongoose = require('mongoose');

const sipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subDescription: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('SIP', sipSchema);
