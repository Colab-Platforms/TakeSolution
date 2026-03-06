const AnnualReport = require('../models/AnnualReport');
const { deleteFile } = require('../utils/fileHelper');

// @desc    Get all annual reports
// @route   GET /api/annual-report
// @access  Public
exports.getAll = async (req, res, next) => {
  try {
    const reports = await AnnualReport.find().sort({ year: -1 });

    res.status(200).json({
      success: true,
      count: reports.length,
      data: reports
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single annual report
// @route   GET /api/annual-report/:id
// @access  Public
exports.getById = async (req, res, next) => {
  try {
    const report = await AnnualReport.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        error: 'Annual report not found'
      });
    }

    res.status(200).json({
      success: true,
      data: report
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create annual report
// @route   POST /api/annual-report
// @access  Private
exports.create = async (req, res, next) => {
  try {
    const report = await AnnualReport.create(req.body);

    res.status(201).json({
      success: true,
      data: report,
      message: 'Annual report created successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update annual report
// @route   PUT /api/annual-report/:id
// @access  Private
exports.update = async (req, res, next) => {
  try {
    let report = await AnnualReport.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        error: 'Annual report not found'
      });
    }

    if (req.body.pdfUrl && req.body.pdfUrl !== report.pdfUrl) {
      deleteFile(report.pdfUrl);
    }

    report = await AnnualReport.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.status(200).json({
      success: true,
      data: report,
      message: 'Annual report updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete annual report
// @route   DELETE /api/annual-report/:id
// @access  Private
exports.remove = async (req, res, next) => {
  try {
    const report = await AnnualReport.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        success: false,
        error: 'Annual report not found'
      });
    }

    deleteFile(report.pdfUrl);
    await report.deleteOne();

    res.status(200).json({
      success: true,
      data: {},
      message: 'Annual report deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
