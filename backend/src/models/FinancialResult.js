const mongoose = require('mongoose');

const financialResultSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'Other Disclosure'
  },
  year: {
    type: String,
    required: [true, 'Year is required'],
    trim: true
  },
  fiscalYear: {
    type: String,
    required: [true, 'Fiscal year is required'],
    enum: ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18'],
    trim: true
  },
  quarter: {
    type: String,
    required: [true, 'Quarter is required'],
    enum: ['Q1', 'Q2', 'Q3', 'Q4'],
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
financialResultSchema.index({ fiscalYear: 1, quarter: 1 });

module.exports = mongoose.model('FinancialResult', financialResultSchema);
