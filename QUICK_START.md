# Quick Start Guide - All Services

## 🚀 Start Everything (3 Terminals)

### Terminal 1: Backend
```bash
cd backend
npm run dev
```
✅ Running on: **http://localhost:5000**

---

### Terminal 2: Admin Panel
```bash
cd admin
npm start
```
✅ Running on: **http://localhost:3000**

**Login:**
- Email: `admin@investor.com`
- Password: `admin123`

---

### Terminal 3: Client Website
```bash
cd client

# First time only - install axios
npm install axios

# Start development server
npm run dev
```
✅ Running on: **http://localhost:5173**

---

## 🔍 Quick Verification

### 1. Check Backend
```bash
curl http://localhost:5000/api/health
```
Expected: `{"success":true,"message":"Server is running"}`

### 2. Check Admin
Open: http://localhost:3000
- Should see login page
- Login with admin credentials
- Should redirect to dashboard

### 3. Check Client
Open: http://localhost:5173
- Should see homepage
- Navigate to Investor page
- Check Financial Result tab
- Should see data

---

## 📁 Project Structure

```
your-project/
├── client/          → http://localhost:5173 (Vite)
├── admin/           → http://localhost:3000 (React)
└── backend/         → http://localhost:5000 (Express)
```

---

## ⚡ Important Notes

### Client Uses Vite (Not Create React App)
- Start command: `npm run dev` (not `npm start`)
- Default port: `5173` (not `3000`)
- Env variables: `VITE_*` (not `REACT_APP_*`)
- Faster build and hot reload

### Environment Variables

**Backend (.env):**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/investor-cms
JWT_SECRET=your-secret-key
```

**Admin (.env):**
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_BASE_URL=http://localhost:5000
```

**Client (.env):**
```
VITE_API_URL=http://localhost:5000/api
VITE_BASE_URL=http://localhost:5000
```

---

## 🔧 First Time Setup

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run seed
npm run dev
```

### Admin
```bash
cd admin
npm install
cp .env.example .env
npm start
```

### Client
```bash
cd client
npm install
npm install axios
npm run dev
```

---

## 🎯 Test the Complete Flow

1. **Start all three services** (see above)

2. **Add data in Admin:**
   - Login to admin (localhost:3000)
   - Go to Investor Management
   - Click Financial Result tab
   - Select FY26
   - Click "+ Add New"
   - Fill form and upload PDF
   - Click Create

3. **Verify in Client:**
   - Open client (localhost:5173)
   - Go to Investor page
   - Click Financial Result tab
   - Select FY26
   - Should see your new entry

4. **Check Backend:**
   - Backend terminal should show API calls
   - MongoDB should have the data

---

## 🐛 Common Issues

### Backend won't start
- Check MongoDB is running
- Check port 5000 is free
- Run `npm run seed` to create admin user

### Admin won't start
- Check port 3000 is free
- Check backend is running
- Clear browser cache

### Client won't start
- Check port 5173 is free
- Run `npm install axios`
- Check `.env` file exists
- Restart after changing `.env`

### API calls failing
- Check all three services are running
- Check environment variables
- Check browser console for errors
- Check CORS settings in backend

---

## 📊 Port Reference

| Service | Port | URL |
|---------|------|-----|
| Backend | 5000 | http://localhost:5000 |
| Admin | 3000 | http://localhost:3000 |
| Client | 5173 | http://localhost:5173 |

---

## 🎓 Useful Commands

### Check if ports are in use

**Windows:**
```powershell
netstat -ano | findstr :5000
netstat -ano | findstr :3000
netstat -ano | findstr :5173
```

**Mac/Linux:**
```bash
lsof -ti:5000
lsof -ti:3000
lsof -ti:5173
```

### Kill process on port

**Windows:**
```powershell
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
kill -9 <PID>
```

### Check MongoDB status

**Windows:**
```powershell
net start | findstr MongoDB
```

**Mac/Linux:**
```bash
sudo systemctl status mongod
```

---

## 📚 Documentation

- **Complete Setup:** `COMPLETE_SETUP_GUIDE.md`
- **Client Status:** `CLIENT_FOLDER_STATUS.md`
- **API Integration:** `CLIENT_API_INTEGRATION_GUIDE.md`
- **Project Summary:** `PROJECT_SUMMARY.md`
- **Backend API:** `backend/README.md`
- **Admin Panel:** `admin/README.md`

---

## ✅ Success Checklist

- [ ] Backend running on port 5000
- [ ] Admin running on port 3000
- [ ] Client running on port 5173
- [ ] Can login to admin
- [ ] Can add data in admin
- [ ] Can see data in client
- [ ] PDFs open correctly
- [ ] No console errors

---

## 🎉 You're All Set!

If all three services are running and you can see the investor data, you're good to go! 🚀

**Next Steps:**
1. Complete remaining component integrations
2. Test all functionality
3. Deploy to production
