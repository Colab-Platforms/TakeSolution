const mongoose = require('mongoose');

const boardOfDirectorsSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required']
  },
  imageFileName: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for faster queries
boardOfDirectorsSchema.index({ order: 1 });

module.exports = mongoose.model('BoardOfDirectors', boardOfDirectorsSchema);
