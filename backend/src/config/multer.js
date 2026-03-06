const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure upload directories exist
const createUploadDirs = () => {
  const dirs = [
    'uploads/investordata/financial-results',
    'uploads/investordata/annual-reports',
    'uploads/investordata/investor-corner',
    'uploads/investordata/corporate-governance',
    'uploads/investordata/disclosure',
    'uploads/investordata/board-of-directors',
    'uploads/investordata/subsidiary-financials',
    'uploads/investordata/general'  // Add general folder
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

createUploadDirs();

// Storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const category = req.body.category || 'general';
    let uploadPath = 'uploads/investordata/';

    switch (category) {
      case 'financial-result':
        uploadPath += 'financial-results';
        break;
      case 'annual-report':
        uploadPath += 'annual-reports';
        break;
      case 'investor-corner':
        uploadPath += 'investor-corner';
        break;
      case 'corporate-governance':
        uploadPath += 'corporate-governance';
        break;
      case 'disclosure':
        uploadPath += 'disclosure';
        break;
      case 'board-of-directors':
        uploadPath += 'board-of-directors';
        break;
      case 'subsidiary-financials':
        uploadPath += 'subsidiary-financials';
        break;
      default:
        uploadPath += 'general';
    }

    // Ensure the directory exists before saving
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /pdf|png|jpg|jpeg/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF, PNG, JPG, and JPEG files are allowed'));
  }
};

// Multer upload configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024 // 10MB default
  },
  fileFilter: fileFilter
});

module.exports = upload;
