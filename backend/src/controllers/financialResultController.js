const FinancialResult = require('../models/FinancialResult');
const { deleteFile } = require('../utils/fileHelper');

// @desc    Get all financial results
// @route   GET /api/financial-result
// @access  Public
exports.getAll = async (req, res, next) => {
  try {
    const { fiscalYear } = req.query;
    
    let query = {};
    if (fiscalYear) {
      query.fiscalYear = fiscalYear;
    }

    const results = await FinancialResult.find(query).sort({ year: -1, quarter: 1 });

    res.status(200).json({
      success: true,
      count: results.length,
      data: results
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get financial results by fiscal year
// @route   GET /api/financial-result/by-fy/:fiscalYear
// @access  Public
exports.getByFiscalYear = async (req, res, next) => {
  try {
    const results = await FinancialResult.find({ 
      fiscalYear: req.params.fiscalYear 
    }).sort({ quarter: 1 });

    res.status(200).json({
      success: true,
      count: results.length,
      data: results
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single financial result
// @route   GET /api/financial-result/:id
// @access  Public
exports.getById = async (req, res, next) => {
  try {
    const result = await FinancialResult.findById(req.params.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: 'Financial result not found'
      });
    }

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create financial result
// @route   POST /api/financial-result
// @access  Private
exports.create = async (req, res, next) => {
  try {
    const result = await FinancialResult.create(req.body);

    res.status(201).json({
      success: true,
      data: result,
      message: 'Financial result created successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update financial result
// @route   PUT /api/financial-result/:id
// @access  Private
exports.update = async (req, res, next) => {
  try {
    let result = await FinancialResult.findById(req.params.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: 'Financial result not found'
      });
    }

    // If PDF is being updated, delete old file
    if (req.body.pdfUrl && req.body.pdfUrl !== result.pdfUrl) {
      deleteFile(result.pdfUrl);
    }

    result = await FinancialResult.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      data: result,
      message: 'Financial result updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete financial result
// @route   DELETE /api/financial-result/:id
// @access  Private
exports.remove = async (req, res, next) => {
  try {
    const result = await FinancialResult.findById(req.params.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        error: 'Financial result not found'
      });
    }

    // Delete associated file
    deleteFile(result.pdfUrl);

    await result.deleteOne();

    res.status(200).json({
      success: true,
      data: {},
      message: 'Financial result deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
