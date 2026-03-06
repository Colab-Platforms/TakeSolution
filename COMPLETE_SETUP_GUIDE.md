# Complete Setup & Testing Guide

## 🎯 Overview

You now have a complete Investor CMS system with:
- **Backend API** (Node.js + Express + MongoDB)
- **Admin Panel** (React - for managing data)
- **Client Website** (React - your existing site, partially updated)

## 📁 Project Structure

```
your-project/
├── backend/              # API Server
├── admin/                # Admin Panel (NEW)
├── src/                  # Client Website (EXISTING)
├── public/               # Client Public Files
└── package.json          # Client Dependencies
```

---

## 🚀 Complete Setup Steps

### Step 1: Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env (use default values for local development)
# Make sure MongoDB is running

# Seed admin user
npm run seed

# Start backend server
npm run dev
```

**Backend should be running on:** `http://localhost:5000`

**Test it:**
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{"success":true,"message":"Server is running"}
```

---

### Step 2: Admin Panel Setup

```bash
# Open new terminal
# Navigate to admin
cd admin

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start admin panel
npm start
```

**Admin panel should open at:** `http://localhost:3000`

**Login with:**
- Email: `admin@investor.com`
- Password: `admin123`

---

### Step 3: Client Website Setup

```bash
# Open new terminal
# Navigate to client root (your existing project)
cd ..

# Create .env file (if not exists)
echo "REACT_APP_API_URL=http://localhost:5000/api" > .env
echo "REACT_APP_BASE_URL=http://localhost:5000" >> .env

# Install axios if not installed
npm install axios

# Start client
npm start
```

**Client should run on:** `http://localhost:3001` (or next available port)

---

## 🧪 Testing the Complete System

### Test 1: Backend API

```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Test login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@investor.com","password":"admin123"}'

# Should return token
```

### Test 2: Admin Panel

1. Open `http://localhost:3000`
2. Login with admin credentials
3. Go to **Investor Management**
4. Click **Financial Result** tab
5. Select **FY26**
6. Click **+ Add New**
7. Fill form:
   - Year: `FY-2026`
   - Quarter: `Q1`
   - Description: `Test Financial Result`
8. Upload a PDF file
9. Click **Create**
10. Verify entry appears in table

### Test 3: Client Website

1. Open `http://localhost:3001`
2. Navigate to Investor page
3. Click **Financial Result** tab
4. Select **FY26**
5. Verify the data you just added appears
6. Click PDF link to verify it opens

---

## 📊 Data Flow Test

```
1. Admin adds data → 2. Backend saves to MongoDB → 3. Client fetches from API → 4. User sees data
```

**Complete Flow Test:**

1. **Admin Panel** (`localhost:3000`):
   - Add a new Annual Report
   - Year: `FY-2025`
   - Description: `Test Annual Report 2025`
   - Upload PDF
   - Click Create

2. **Backend** (check terminal):
   - Should see: `POST /api/annual-report 201`

3. **Client Website** (`localhost:3001`):
   - Go to Investor → Annual Report tab
   - Should see your new entry
   - Click PDF link - should open

---

## 🔍 Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Start MongoDB
```bash
# Windows
net start MongoDB

# Mac/Linux
sudo systemctl start mongod
```

**Port Already in Use:**
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:** Change PORT in backend/.env or kill process on port 5000

### Admin Panel Issues

**CORS Error:**
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:** 
- Check backend is running
- Verify `ADMIN_URL` in backend/.env matches admin URL
- Restart backend after changing .env

**Can't Login:**
- Verify backend is running
- Check admin user was seeded: `cd backend && npm run seed`
- Clear browser localStorage
- Check browser console for errors

**File Upload Fails:**
- Check file size (max 10MB)
- Verify file type (PDF only)
- Check backend uploads folder permissions
- Check backend terminal for errors

### Client Website Issues

**Data Not Loading:**
- Check browser console for errors
- Verify API_URL in client .env
- Check backend is running
- Test API endpoint directly in browser

**PDFs Not Opening:**
- Check BASE_URL in client .env
- Verify file was uploaded correctly
- Check browser network tab for 404 errors

---

## 📝 Current Status

### ✅ Fully Implemented

1. **Backend API**
   - All endpoints working
   - Authentication
   - File upload
   - CRUD operations

2. **Admin Panel**
   - Login/Logout
   - Dashboard
   - Financial Result Manager (complete)
   - Annual Report Manager (complete)
   - Other tabs (placeholders)

3. **Client Website**
   - Financial Result (API integrated)
   - Annual Report (API integrated)
   - Other tabs (still using hardcoded data)

### 🚧 Needs Completion

**Client Components to Update:**
1. InvestorCorner.jsx
2. CorporateGovernance.jsx
3. Disclosure.jsx
4. BoardOfDirectors.jsx
5. FinancialSubsidary.jsx

**Admin Components to Complete:**
1. InvestorCorner Manager
2. CorporateGovernance Manager
3. Disclosure Manager
4. BoardOfDirectors Manager
5. FinancialSubsidary Manager

**See:** `CLIENT_API_INTEGRATION_GUIDE.md` for update patterns

---

## 🎓 Usage Guide

### For Admins

1. **Login** to admin panel
2. **Navigate** to Investor Management
3. **Select** the tab you want to manage
4. **Add** new entries using "+ Add New" button
5. **Edit** existing entries using pencil icon
6. **Delete** entries using trash icon
7. **Upload** PDF files for each entry

### For Developers

1. **Backend** handles all data operations
2. **Admin** provides UI for data management
3. **Client** displays data to end users
4. **API** connects everything together

### For End Users

1. Visit client website
2. Navigate to Investor page
3. Browse different tabs
4. Click PDF links to view documents
5. Data updates automatically from admin

---

## 🔐 Security Notes

1. **Change default admin password** after first login
2. **Use strong JWT_SECRET** in production
3. **Enable HTTPS** in production
4. **Restrict admin panel access** (IP whitelist, VPN)
5. **Regular backups** of MongoDB
6. **File upload validation** (size, type)
7. **Rate limiting** on API endpoints

---

## 🚀 Deployment Checklist

### Backend
- [ ] Set production MongoDB URI
- [ ] Change JWT_SECRET
- [ ] Set NODE_ENV=production
- [ ] Configure CORS for production URLs
- [ ] Set up file storage (AWS S3 recommended)
- [ ] Enable HTTPS
- [ ] Set up monitoring (PM2, New Relic)

### Admin Panel
- [ ] Update API URLs in .env
- [ ] Build: `npm run build`
- [ ] Deploy to Vercel/Netlify
- [ ] Restrict access (password protect)

### Client Website
- [ ] Update API URLs in .env
- [ ] Test all tabs
- [ ] Build: `npm run build`
- [ ] Deploy to production

---

## 📚 Documentation

- **Backend API:** `backend/README.md`
- **Admin Panel:** `admin/README.md`
- **Client Integration:** `CLIENT_API_INTEGRATION_GUIDE.md`
- **Backend Setup:** `backend/SETUP.md`
- **Admin Setup:** `admin/SETUP.md`

---

## 🆘 Support

If you encounter issues:

1. Check terminal logs (backend, admin, client)
2. Check browser console (F12)
3. Check network tab for API calls
4. Verify all services are running
5. Check environment variables
6. Review documentation

---

## 🎉 Success Criteria

Your system is working correctly when:

✅ Backend API responds to health check
✅ Admin can login successfully
✅ Admin can add/edit/delete data
✅ Files upload successfully
✅ Client displays data from API
✅ PDFs open correctly
✅ No console errors
✅ All three services run simultaneously

---

## 📈 Next Steps

1. Complete remaining client components
2. Complete remaining admin managers
3. Add search/filter functionality
4. Add pagination
5. Add data export (CSV/Excel)
6. Add audit logs
7. Add multiple admin users
8. Add email notifications
9. Add data validation
10. Deploy to production

---

## 🏁 Quick Start (All Services)

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Admin
cd admin && npm start

# Terminal 3 - Client
npm start
```

**Access:**
- Backend: http://localhost:5000
- Admin: http://localhost:3000
- Client: http://localhost:3001

**Login:**
- Email: admin@investor.com
- Password: admin123

---

**You're all set! 🚀**
