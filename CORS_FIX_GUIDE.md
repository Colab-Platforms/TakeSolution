# CORS Error Fix Guide

## Problem
Client getting CORS error when trying to fetch data from backend:
```
Access to XMLHttpRequest at 'http://localhost:5000/api/financial-result/by-fy/FY26' 
from origin 'http://localhost:5173' has been blocked by CORS policy
```

## Root Cause
Backend CORS configuration was set for wrong ports:
- CLIENT_URL was set to `http://localhost:3000` (Create React App default)
- But client is running on `http://localhost:5173` (Vite default)

## Solution Applied

### 1. Updated Backend .env
**File**: `backend/.env`

Changed:
```env
# OLD
CLIENT_URL=http://localhost:3000
ADMIN_URL=http://localhost:3001

# NEW
CLIENT_URL=http://localhost:5173
ADMIN_URL=http://localhost:3000
```

### 2. Enhanced CORS Configuration
**File**: `backend/src/server.js`

Added explicit ports and headers:
```javascript
app.use(cors({
  origin: [
    process.env.CLIENT_URL, 
    process.env.ADMIN_URL, 
    'http://localhost:5173',  // Client (Vite)
    'http://localhost:3000'   // Admin (CRA)
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## How to Fix

### Step 1: Restart Backend Server

**IMPORTANT**: You MUST restart the backend for changes to take effect!

```bash
# Stop the backend (Ctrl+C in the terminal)
# Then restart:
cd backend
npm start
```

You should see:
```
✓ All upload directories are ready
MongoDB Connected: ...
Server running in development mode on port 5000
```

### Step 2: Verify Client is Running on Port 5173

Check your client terminal - it should show:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

If it's on a different port, update `backend/.env` CLIENT_URL to match.

### Step 3: Test the Connection

1. Open browser to: http://localhost:5173
2. Open Developer Console (F12)
3. Go to Investor page
4. Check Console - should NOT see CORS errors
5. Data should load from API

## Port Configuration Summary

| Service | Port | URL |
|---------|------|-----|
| Backend API | 5000 | http://localhost:5000 |
| Admin Panel | 3000 | http://localhost:3000 |
| Client Website | 5173 | http://localhost:5173 |

## Troubleshooting

### Issue: Still getting CORS error after restart
**Solution**:
1. Make sure backend is fully stopped (check Task Manager/Activity Monitor)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Hard refresh page (Ctrl+F5)
4. Check backend console for startup messages

### Issue: Client running on different port
**Solution**:
1. Check client terminal for actual port
2. Update `backend/.env` CLIENT_URL to match
3. Restart backend

### Issue: Backend not picking up .env changes
**Solution**:
1. Stop backend completely
2. Check if `.env` file is in `backend/` folder (not root)
3. Verify no typos in .env file
4. Restart backend

### Issue: Multiple CORS errors
**Solution**:
```bash
# Kill all node processes
# Windows:
taskkill /F /IM node.exe

# Mac/Linux:
killall node

# Then restart backend
cd backend
npm start
```

## Verify Fix is Working

### 1. Check Backend Console
Should see:
```
✓ All upload directories are ready
MongoDB Connected: cluster0.xxxxx.mongodb.net
Server running in development mode on port 5000
```

### 2. Check Browser Console
Should NOT see:
- ❌ CORS policy errors
- ❌ Network errors
- ❌ Failed to fetch

Should see:
- ✅ Successful API calls
- ✅ Data loading
- ✅ No errors

### 3. Check Network Tab
1. Open DevTools (F12)
2. Go to Network tab
3. Refresh page
4. Look for API calls to `localhost:5000`
5. Status should be `200 OK`
6. Response should have data

## Environment Files Check

### Backend .env (backend/.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
CLIENT_URL=http://localhost:5173  ← Must match client port
ADMIN_URL=http://localhost:3000   ← Must match admin port
```

### Client .env (client/.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_BASE_URL=http://localhost:5000
```

### Admin .env (admin/.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_BASE_URL=http://localhost:5000
```

## Quick Test Commands

### Test Backend is Running
```bash
curl http://localhost:5000/api/health
```

Should return:
```json
{"success":true,"message":"Server is running"}
```

### Test CORS from Browser Console
```javascript
fetch('http://localhost:5000/api/health')
  .then(r => r.json())
  .then(console.log)
```

Should log:
```
{success: true, message: "Server is running"}
```

## Prevention

To avoid this in the future:
1. ✅ Always check which port your dev server is running on
2. ✅ Update .env files to match actual ports
3. ✅ Restart backend after .env changes
4. ✅ Use explicit port numbers in CORS config

## Files Modified

- ✅ `backend/.env` - Updated CLIENT_URL and ADMIN_URL
- ✅ `backend/src/server.js` - Enhanced CORS configuration

## Next Steps

1. **Restart backend server** (REQUIRED!)
2. Refresh client browser
3. Check console for errors
4. Test data loading
5. Verify API calls succeed

---

**Status**: ✅ Fixed - Restart backend to apply
**Last Updated**: February 26, 2026
