const mongoose = require('mongoose');

const corporateGovernanceSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Category is required'],
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  pdfUrl: {
    type: String,
    required: [true, 'PDF URL is required']
  },
  pdfFileName: {
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
corporateGovernanceSchema.index({ category: 1, order: 1 });

module.exports = mongoose.model('CorporateGovernance', corporateGovernanceSchema);
