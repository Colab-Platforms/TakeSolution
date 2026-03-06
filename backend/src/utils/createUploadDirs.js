const fs = require('fs');
const path = require('path');

/**
 * Create all required upload directories
 */
const createUploadDirectories = () => {
  const baseDir = path.join(__dirname, '../../uploads/investordata');
  
  const directories = [
    'financial-results',
    'annual-reports',
    'investor-corner',
    'corporate-governance',
    'disclosure',
    'board-of-directors',
    'subsidiary-financials',
    'general'
  ];

  // Create base directory
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
    console.log('✓ Created base upload directory');
  }

  // Create subdirectories
  directories.forEach(dir => {
    const fullPath = path.join(baseDir, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`✓ Created directory: ${dir}`);
    }
  });

  console.log('✓ All upload directories are ready');
};

// Run if called directly
if (require.main === module) {
  createUploadDirectories();
}

module.exports = createUploadDirectories;
