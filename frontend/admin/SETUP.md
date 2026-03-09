# Quick Setup Guide - Admin Panel

## Prerequisites
- Node.js (v14 or higher)
- Backend API running on http://localhost:5000

## Installation Steps

### 1. Navigate to admin folder
```bash
cd admin
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create .env file
```bash
# Copy the example file
cp .env.example .env
```

The .env file should contain:
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_BASE_URL=http://localhost:5000
```

### 4. Start the development server
```bash
npm start
```

The admin panel will automatically open at `http://localhost:3000`

## First Login

1. Open `http://localhost:3000` in your browser
2. You'll be redirected to the login page
3. Use default credentials:
   - **Email**: `admin@investor.com`
   - **Password**: `admin123`
4. Click **Login**

## Quick Tour

### Dashboard
- Overview of the system
- Quick links to different sections

### Investor Management
- Main section for managing all investor data
- 7 tabs for different data types:
  1. **Financial Result** - Quarterly financial data with FY tabs
  2. **Annual Report** - Yearly reports
  3. **Investor Corner** - Meeting notices and voting results
  4. **Corporate Governance** - Policies and documents
  5. **Disclosure** - Regulatory disclosures
  6. **Board of Directors** - Board member information
  7. **Subsidiary Financials** - Subsidiary company data

## How to Add Data

### Example: Adding Financial Result

1. Go to **Investor Management**
2. Click **Financial Result** tab
3. Select fiscal year (e.g., FY26)
4. Click **+ Add New** button (top right)
5. Fill in the form:
   ```
   Fiscal Year: FY26 (auto-filled)
   Year: FY-2026
   Quarter: Q1
   Description: Consolidated_Q1_FY26_TSL
   ```
6. Click **Choose File** and select a PDF
7. Click **Upload File**
8. Wait for success message
9. Click **Create**
10. Done! The new entry appears in the table

## How to Edit Data

1. Find the row you want to edit
2. Click the **Edit** button (pencil icon)
3. Update the fields
4. Upload new PDF if needed
5. Click **Update**

## How to Delete Data

1. Find the row you want to delete
2. Click the **Delete** button (trash icon)
3. Confirm deletion in the popup
4. Done! Data and file are deleted

## Troubleshooting

### Can't Login
- Make sure backend is running on port 5000
- Check if admin user was seeded (run `npm run seed` in backend)
- Clear browser cache and try again

### File Upload Fails
- Check file size (max 10MB)
- Only PDF files are allowed for most sections
- Make sure backend is running

### Data Not Loading
- Check browser console for errors
- Verify backend API is accessible
- Check network tab in browser dev tools

### CORS Error
- Make sure backend `.env` has correct `ADMIN_URL`
- Restart backend after changing `.env`

## Development Tips

### Hot Reload
- Changes to code will automatically reload the page
- No need to restart the server

### Browser DevTools
- Press F12 to open developer tools
- Check Console tab for errors
- Check Network tab for API calls

### Testing API Calls
- All API calls go through `src/services/api.js`
- Check this file if you need to debug API issues

## Next Steps

1. Explore all tabs in Investor Management
2. Try adding, editing, and deleting data
3. Upload different types of files
4. Check how data appears on the client website

## Need Help?

- Check the main README.md for detailed documentation
- Review backend API documentation
- Check browser console for error messages
