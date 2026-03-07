# Paste Link Feature Guide

## Overview
The admin panel now supports two methods for adding PDF files:
1. **Upload File** - Upload PDFs directly to your server
2. **Paste Link** - Use external URLs from free hosting services

## Why Use Paste Link?
- Zero server storage costs
- Faster PDF delivery via CDN
- Easy to update files (just change the link)
- Use free hosting services

## Supported Hosting Services

### 1. GitHub Releases (Recommended - 100% Free)
**Best for:** Public documents, unlimited bandwidth

**Steps:**
1. Go to your GitHub repository
2. Click "Releases" → "Create a new release"
3. Add a tag (e.g., `v1.0`, `pdfs-2025`)
4. Drag and drop your PDF file
5. Click "Publish release"
6. Right-click the PDF → "Copy link address"
7. You'll get: `https://github.com/username/repo/releases/download/v1.0/report.pdf`

**Pros:**
- Completely free
- Unlimited bandwidth
- Fast GitHub CDN
- Permanent links
- Version control

### 2. Google Drive (Free 15GB)
**Best for:** Private documents you want to share publicly

**Steps:**
1. Upload PDF to Google Drive
2. Right-click file → "Get link"
3. Change to "Anyone with the link"
4. Copy the shareable link
5. (Optional) Convert to direct download:
   - Original: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   - Direct: `https://drive.google.com/uc?export=download&id=FILE_ID`

**Pros:**
- 15GB free storage
- Easy to manage
- Familiar interface

**Cons:**
- May show preview page instead of direct download
- Requires Google account

### 3. Dropbox (Free 2GB)
**Best for:** Small collections of files

**Steps:**
1. Upload PDF to Dropbox
2. Click "Share" → "Create link"
3. Copy the link
4. Change `?dl=0` to `?dl=1` at the end for direct download

**Pros:**
- Simple sharing
- Direct download links

**Cons:**
- Only 2GB free
- Limited bandwidth on free tier

### 4. Cloudflare R2 / Backblaze B2
**Best for:** Professional deployments, high traffic

**Setup required but very cheap:**
- Backblaze B2: $0.005/GB/month
- Cloudflare R2: $0.015/GB/month (no egress fees)

## How to Use in Admin Panel

### Step 1: Upload PDF to External Service
Choose one of the services above and upload your PDF file.

### Step 2: Copy the Direct Link
Get the shareable/direct download link from the service.

### Step 3: Open Admin Panel
1. Login to admin panel
2. Navigate to "Investor Management"
3. Select the appropriate tab (Financial Results, Annual Reports, etc.)
4. Click "Add New"

### Step 4: Fill the Form
1. Fill in required fields (year, description, etc.)
2. Select **"Paste Link"** radio button
3. Paste the URL in the "PDF URL" field
4. Verify the preview link
5. Click "Create" or "Update"

## Example Workflow

### Using GitHub Releases:

```
1. Upload to GitHub:
   - Create release "investor-pdfs-2025"
   - Upload "Q1-Financial-Results.pdf"
   - Get link: https://github.com/mycompany/pdfs/releases/download/investor-pdfs-2025/Q1-Financial-Results.pdf

2. In Admin Panel:
   - Open Financial Results
   - Click "Add New"
   - Fill: FY26, Q1, "Consolidated Q1 Results"
   - Select "Paste Link"
   - Paste: https://github.com/mycompany/pdfs/releases/download/investor-pdfs-2025/Q1-Financial-Results.pdf
   - Submit

3. Result:
   - PDF stored in database with external URL
   - Client website displays PDF from GitHub CDN
   - Zero server storage used
```

## Forms with Paste Link Support

All investor management forms now support paste link:
- ✅ Financial Results
- ✅ Annual Reports
- ✅ Disclosures
- ✅ Investor Corner
- ✅ Corporate Governance
- ✅ Subsidiary Financials

## Technical Details

### Backend Changes
- `fileHelper.js` now skips deletion for external URLs
- Controllers work with both local paths and external URLs
- No changes needed to models or routes

### Frontend Changes
- All AddEditModal components have radio button toggle
- URL validation for paste link option
- Preview link display
- Automatic filename extraction from URL

### Database
- `pdfUrl` field stores both local paths and external URLs
- No schema changes required
- Existing data continues to work

## Best Practices

1. **Use GitHub Releases for public investor documents**
   - Free, fast, reliable
   - Good for compliance and transparency

2. **Keep URLs permanent**
   - Don't delete or rename files on external services
   - Use versioned releases

3. **Test links before submitting**
   - Click the preview link to verify
   - Ensure direct download (not preview page)

4. **Organize your external storage**
   - Use clear naming conventions
   - Group by fiscal year or category

5. **Backup important files**
   - Keep local copies
   - Don't rely solely on external services

## Troubleshooting

### PDF doesn't open on client website
- Verify the URL is a direct download link
- Check if the file is publicly accessible
- Test the URL in an incognito browser

### Preview shows wrong filename
- The system extracts filename from URL
- Use descriptive filenames in your external storage

### Want to switch from upload to paste link
- Edit the existing entry
- Select "Paste Link"
- Enter the new URL
- Old file remains on server (manual cleanup needed)

## Migration Guide

### Moving existing uploads to external storage:

1. Download PDFs from `backend/uploads/investordata/`
2. Upload to GitHub Releases or other service
3. Edit each entry in admin panel
4. Switch to "Paste Link" and enter new URL
5. Save changes
6. (Optional) Clean up old files from server

## Security Considerations

- External URLs are stored as-is in database
- No server-side validation of URL content
- Ensure external services are trustworthy
- Use HTTPS URLs only
- Consider access control on external services

## Cost Comparison

| Method | Storage Cost | Bandwidth Cost | Setup Complexity |
|--------|-------------|----------------|------------------|
| Server Upload | $5-50/month | $10-100/month | Low |
| GitHub Releases | Free | Free | Low |
| Google Drive | Free (15GB) | Free | Low |
| Dropbox | Free (2GB) | Limited free | Low |
| Backblaze B2 | $0.005/GB | Free with CDN | Medium |
| Cloudflare R2 | $0.015/GB | Free | Medium |

## Support

For issues or questions:
1. Check the preview link in the form
2. Verify external URL is accessible
3. Test in incognito mode
4. Check browser console for errors
