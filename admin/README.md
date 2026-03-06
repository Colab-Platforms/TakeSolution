# Investor CMS - Admin Panel

Admin panel for managing investor data built with React and Bootstrap.

## Features

- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Financial Result Management (with FY tabs)
- ✅ Annual Report Management
- ✅ Investor Corner Management
- ✅ Corporate Governance Management
- ✅ Disclosure Management
- ✅ Board of Directors Management
- ✅ Subsidiary Financials Management
- ✅ File Upload (PDF & Images)
- ✅ CRUD Operations
- ✅ Responsive Design
- ✅ Toast Notifications
- ✅ Confirmation Dialogs

## Setup Instructions

### 1. Install Dependencies
```bash
cd admin
npm install
```

### 2. Environment Configuration
Create a `.env` file in the admin root directory:
```bash
cp .env.example .env
```

Update the `.env` file:
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_BASE_URL=http://localhost:5000
```

### 3. Start Development Server
```bash
npm start
```

The admin panel will open at `http://localhost:3000`

### 4. Login
Use the default admin credentials:
- Email: `admin@investor.com`
- Password: `admin123`

## Project Structure

```
admin/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── Common/
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ConfirmDialog.jsx
│   │   │   └── FileUpload.jsx
│   │   ├── Layout/
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Sidebar.jsx
│   │   └── Investor/
│   │       ├── InvestorTabs.jsx
│   │       ├── FinancialResult/
│   │       ├── AnnualReport/
│   │       ├── InvestorCorner/
│   │       ├── CorporateGovernance/
│   │       ├── Disclosure/
│   │       ├── BoardOfDirectors/
│   │       └── FinancialSubsidary/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── InvestorManagement.jsx
│   ├── services/
│   │   ├── api.js
│   │   └── auth.js
│   ├── utils/
│   │   └── constants.js
│   ├── App.jsx
│   ├── App.css
│   └── index.jsx
└── package.json
```

## Usage Guide

### Financial Result Management

1. Navigate to **Investor Management** from sidebar
2. Click on **Financial Result** tab
3. Select fiscal year (FY26, FY25, etc.)
4. Click **Add New** button
5. Fill in the form:
   - Fiscal Year (auto-filled)
   - Year (e.g., FY-2026)
   - Quarter (Q1, Q2, Q3, Q4)
   - Description
   - Upload PDF file
6. Click **Create**

### Editing Data

1. Click the **Edit** button (pencil icon) on any row
2. Update the form fields
3. Upload new PDF if needed
4. Click **Update**

### Deleting Data

1. Click the **Delete** button (trash icon) on any row
2. Confirm deletion in the dialog
3. Data and associated file will be deleted

## API Integration

The admin panel communicates with the backend API:

- **Base URL**: `http://localhost:5000/api`
- **Authentication**: JWT token in Authorization header
- **File Upload**: Multipart form data

All API calls are handled through the `services/api.js` file.

## Technologies Used

- React 18
- React Router v6
- React Bootstrap
- Axios
- React Toastify
- React Hook Form
- React Icons

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment

The admin panel can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

Make sure to update the `.env` file with production API URLs.

## Troubleshooting

### CORS Issues
- Make sure backend CORS is configured to allow admin URL
- Check `ADMIN_URL` in backend `.env` file

### Authentication Issues
- Clear browser localStorage
- Check if backend is running
- Verify JWT_SECRET matches between backend and token

### File Upload Issues
- Check file size (max 10MB)
- Verify file type (PDF or images only)
- Ensure backend upload folder has write permissions

## Next Steps

1. Complete implementation of remaining tab managers (Investor Corner, Corporate Governance, etc.)
2. Add form validation
3. Add search and filter functionality
4. Add pagination for large datasets
5. Add export functionality (CSV, Excel)
6. Add audit logs
7. Add user management (multiple admins)

## Support

For issues or questions, please contact the development team.
