# Upload Directory Fix Guide

## Problem
When uploading PDFs in the admin panel, you get this error:
```
ENOENT: no such file or directory, open 'C:\Users\USER\Desktop\TAKE Website\TakeSolutionCMS\backend\uploads\investordata\general\...'
```

## Root Cause
The upload directories don't exist when the backend tries to save files.

## Solution Applied

### 1. Updated Multer Configuration
**File**: `backend/src/config/multer.js`

- Added 'general' folder to the list of directories to create
- Added runtime directory check before saving files

### 2. Created Directory Setup Utility
**File**: `backend/src/utils/createUploadDirs.js`

- Utility function to create all required directories
- Can be called programmatically or run standalone

### 3. Updated Server Startup
**File**: `backend/src/server.js`

- Server now creates all directories on startup automatically
- Ensures directories exist before handling any uploads

### 4. Created Manual Setup Script
**File**: `backend/setup-directories.js`

- Standalone script to create directories manually
- Useful for initial setup or troubleshooting

## How to Fix

### Option 1: Restart Backend (Automatic)
The backend will now create all directories automatically on startup:

```bash
cd backend
npm start
```

The console will show:
```
✓ Created directory: financial-results
✓ Created directory: annual-reports
✓ Created directory: investor-corner
✓ Created directory: corporate-governance
✓ Created directory: disclosure
✓ Created directory: board-of-directors
✓ Created directory: subsidiary-financials
✓ Created directory: general
✓ All upload directories are ready
```

### Option 2: Run Setup Script Manually
If you want to create directories before starting the server:

```bash
cd backend
node setup-directories.js
```

### Option 3: Create Directories Manually (Windows)
```bash
cd backend
mkdir uploads\investordata\financial-results
mkdir uploads\investordata\annual-reports
mkdir uploads\investordata\investor-corner
mkdir uploads\investordata\corporate-governance
mkdir uploads\investordata\disclosure
mkdir uploads\investordata\board-of-directors
mkdir uploads\investordata\subsidiary-financials
mkdir uploads\investordata\general
```

### Option 3b: Create Directories Manually (Linux/Mac)
```bash
cd backend
mkdir -p uploads/investordata/{financial-results,annual-reports,investor-corner,corporate-governance,disclosure,board-of-directors,subsidiary-financials,general}
```

## Directory Structure

After setup, you should have:

```
backend/
└── uploads/
    └── investordata/
        ├── financial-results/
        ├── annual-reports/
        ├── investor-corner/
        ├── corporate-governance/
        ├── disclosure/
        ├── board-of-directors/
        ├── subsidiary-financials/
        └── general/
```

## Testing the Fix

1. **Restart the backend server**:
   ```bash
   cd backend
   npm start
   ```

2. **Login to admin panel**:
   - URL: http://localhost:3000
   - Email: admin@investor.com
   - Password: admin123

3. **Test upload**:
   - Go to any investor tab (e.g., Financial Result)
   - Click "Add New"
   - Fill in the form
   - Upload a PDF file
   - Click "Upload File"
   - Should see: "✓ File uploaded successfully"

4. **Verify file saved**:
   - Check `backend/uploads/investordata/[category]/` folder
   - You should see the uploaded PDF file

## Category Mapping

Each admin tab uploads to a specific directory:

| Admin Tab | Category Value | Upload Directory |
|-----------|---------------|------------------|
| Financial Result | `financial-result` | `financial-results/` |
| Annual Report | `annual-report` | `annual-reports/` |
| Investor Corner | `investor-corner` | `investor-corner/` |
| Corporate Governance | `corporate-governance` | `corporate-governance/` |
| Disclosure | `disclosure` | `disclosure/` |
| Board of Directors | `board-of-directors` | `board-of-directors/` |
| Financial Subsidary | `subsidiary-financials` | `subsidiary-financials/` |
| Unknown/Default | `general` | `general/` |

## Troubleshooting

### Issue: Still getting ENOENT error
**Solution**: 
1. Stop the backend server (Ctrl+C)
2. Run: `node setup-directories.js`
3. Restart: `npm start`

### Issue: Permission denied
**Solution**: 
- Windows: Run terminal as Administrator
- Linux/Mac: Use `sudo` or check folder permissions

### Issue: Directories created but still failing
**Solution**:
1. Check if backend is running from correct directory
2. Verify `.env` file exists and is configured
3. Check console for other errors
4. Clear browser cache and try again

### Issue: Files upload but don't show in client
**Solution**:
1. Check if `VITE_BASE_URL` is set correctly in client `.env`
2. Verify backend is serving static files: `app.use('/uploads', express.static('uploads'))`
3. Check browser console for 404 errors on PDF links

## Prevention

The fix ensures this won't happen again:

1. ✅ Directories created automatically on server startup
2. ✅ Runtime check before each file save
3. ✅ Graceful handling of missing directories
4. ✅ Setup script for manual intervention

## Files Modified

- ✅ `backend/src/config/multer.js` - Added directory checks
- ✅ `backend/src/server.js` - Added startup directory creation
- ✅ `backend/src/utils/createUploadDirs.js` - New utility
- ✅ `backend/setup-directories.js` - New setup script

## Next Steps

1. Restart backend server
2. Test file upload in admin panel
3. Verify files appear in correct directories
4. Check if PDFs are accessible from client

---

**Status**: ✅ Fixed
**Last Updated**: February 26, 2026
