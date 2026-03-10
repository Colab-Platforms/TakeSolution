const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy client build to public root
const clientBuildDir = path.join(__dirname, '..', 'frontend', 'client', 'dist');
const adminBuildDir = path.join(__dirname, '..', 'frontend', 'admin', 'build');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`Source directory does not exist: ${src}`);
    return;
  }
  
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy client build to public root
console.log('Copying client build...');
copyDir(clientBuildDir, publicDir);

// Copy admin build to public/admin
console.log('Copying admin build...');
const adminPublicDir = path.join(publicDir, 'admin');
copyDir(adminBuildDir, adminPublicDir);

console.log('Build merge completed successfully!');
