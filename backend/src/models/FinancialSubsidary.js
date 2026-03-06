const mongoose = require('mongoose');

const financialSubsidarySchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'Other Disclosures'
  },
  year: {
    type: String,
    required: [true, 'Year is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  pdfUrl: {
    type: String,
    required: [true, 'PDF URL is required']
  },
  pdfFileName: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Index for faster queries
financialSubsidarySchema.index({ year: -1 });

module.exports = mongoose.model('FinancialSubsidary', financialSubsidarySchema);
