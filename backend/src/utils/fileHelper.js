const fs = require('fs');
const path = require('path');

// Delete file from filesystem
const deleteFile = (fileUrl) => {
  try {
    if (!fileUrl) return false;

    // Skip deletion for external URLs (http:// or https://)
    if (fileUrl.startsWith('http://') || fileUrl.startsWith('https://')) {
      console.log(`Skipping deletion for external URL: ${fileUrl}`);
      return true; // Return true as it's not an error
    }

    // Remove leading slash if present
    const filePath = fileUrl.startsWith('/') ? fileUrl.substring(1) : fileUrl;
    const fullPath = path.join(__dirname, '../../', filePath);

    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(`File deleted: ${fullPath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error deleting file: ${error.message}`);
    return false;
  }
};

module.exports = {
  deleteFile
};
