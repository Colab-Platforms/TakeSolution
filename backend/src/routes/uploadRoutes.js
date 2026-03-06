const express = require('express');
const router = express.Router();
const { uploadFile, deleteUploadedFile } = require('../controllers/uploadController');
const { protect } = require('../middleware/auth');
const upload = require('../config/multer');

router.post('/', protect, upload.single('file'), uploadFile);
router.delete('/', protect, deleteUploadedFile);

module.exports = router;
