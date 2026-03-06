const mongoose = require('mongoose');

const investorCornerSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['EOGM', 'EGM_Voting', 'AGM', 'AGM_Voting', 'Postal_Ballot', 'Postal_Ballot_Voting'],
    trim: true
  },
  year: {
    type: String,
    required: [true, 'Year is required'],
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
investorCornerSchema.index({ category: 1, year: -1 });

module.exports = mongoose.model('InvestorCorner', investorCornerSchema);
