const mongoose = require('mongoose');
const blog_schema = new mongoose.Schema({
     title: {
    type: String,
    required: true,
    trim: true
  },
     description: {
    type: String,
    required: true,
    trim: true
  },
     image: {
    type: String,
    required: true,
    trim: true
  },
     date: {
    type: String,
    required: true,
    trim: true
  },
     tag: {
    type: String,
    required: true,
    trim: true
  },
     author: {
    type: String,
    required: true,
    trim: true
  },
     readingTime: {
    type: String,
    required: true,
    trim: true
  },
     commentsCount: {
    type: Number,
    required: true,
    trim: true
  },
     content: {
    type: String,
    required: true,
    trim: true
  },
},{
  timestamps: true
})
module.exports = mongoose.model('Blog', blog_schema);
