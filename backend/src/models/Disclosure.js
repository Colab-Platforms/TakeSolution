const mongoose = require('mongoose');

const disclosureSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'Other Disclosures'
  },
  fiscalYear: {
    type: String,
    required: [true, 'Fiscal year is required'],
    enum: ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18'],
    trim: true
  },
  date: {
    type: String,
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
disclosureSchema.index({ fiscalYear: 1, date: -1 });

module.exports = mongoose.model('Disclosure', disclosureSchema);
