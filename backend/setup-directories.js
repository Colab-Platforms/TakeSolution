#!/usr/bin/env node

/**
 * Setup script to create all required upload directories
 * Run this script: node setup-directories.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up upload directories...\n');

const baseDir = path.join(__dirname, 'uploads/investordata');

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
  console.log('✓ Created base directory: uploads/investordata');
} else {
  console.log('✓ Base directory already exists: uploads/investordata');
}

// Create subdirectories
directories.forEach(dir => {
  const fullPath = path.join(baseDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`✓ Already exists: ${dir}`);
  }
});

console.log('\n✅ All upload directories are ready!');
console.log('\nYou can now start the server with: npm start');
