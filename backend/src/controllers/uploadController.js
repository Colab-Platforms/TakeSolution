const { deleteFile } = require('../utils/fileHelper');

// @desc    Upload file
// @route   POST /api/upload
// @access  Private
exports.uploadFile = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'Please upload a file'
      });
    }

    const fileUrl = `/${req.file.path.replace(/\\/g, '/')}`;

    res.status(200).json({
      success: true,
      data: {
        fileName: req.file.filename,
        fileUrl: fileUrl,
        originalName: req.file.originalname,
        size: req.file.size
      },
      message: 'File uploaded successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete file
// @route   DELETE /api/upload
// @access  Private
exports.deleteUploadedFile = async (req, res, next) => {
  try {
    const { fileUrl } = req.body;

    if (!fileUrl) {
      return res.status(400).json({
        success: false,
        error: 'Please provide file URL'
      });
    }

    const deleted = deleteFile(fileUrl);

    if (deleted) {
      res.status(200).json({
        success: true,
        message: 'File deleted successfully'
      });
    } else {
      res.status(404).json({
        success: false,
        error: 'File not found'
      });
    }
  } catch (error) {
    next(error);
  }
};
