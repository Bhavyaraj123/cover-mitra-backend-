const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  },
  benefits: {
    type: [String], 
    required: true
  },
  loanProcess: {
    type: [String], 
    required: true
  },
  eligibility: {
    type: [String], 
    required: true
  },
  idealFor: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Loan', loanSchema);
