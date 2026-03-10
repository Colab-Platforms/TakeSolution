# Deployment Checklist ✅

## Pre-Deployment

### Backend Ready ✅
- [x] package.json with start script
- [x] Health check endpoint (/api/health)
- [x] CORS configuration
- [x] Environment variables documented
- [x] .gitignore configured

### Frontend Ready ✅
- [x] Vite configuration
- [x] Environment variables using VITE_ prefix
- [x] Build scripts configured
- [x] Admin panel with /admin base path

## Deployment Steps

### 1. Backend (Render) 🚀

**Go to:** https://render.com

1. **New Web Service**
   - Connect GitHub repo
   - Select branch: `cms`
   - Root Directory: `backend`

2. **Settings:**
   ```
   Name: takesolution-backend
   Region: Singapore
   Build Command: npm install
   Start Command: npm start
   ```

3. **Environment Variables:**
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://takesolution:admin123@takesolution.y8z6ydv.mongodb.net/?appName=TakeSolution
   JWT_SECRET=your-super-secret-jwt-key-2024
   JWT_EXPIRE=7d
   CLIENT_URL=https://take-solution-cms.vercel.app
   ADMIN_URL=https://take-solution-cms.vercel.app
   MAX_FILE_SIZE=10485760
   UPLOAD_PATH=uploads/investordata
   ```

4. **Create Web Service** → Wait 5-10 minutes

5. **Copy URL:** `https://takesolution-backend.onrender.com`

6. **Test:** Visit `https://takesolution-backend.onrender.com/api/health`
   - Should return: `{"success":true,"message":"Server is running"}`

### 2. MongoDB Atlas 🍃

1. Go to: https://cloud.mongodb.com
2. **Network Access** → **IP Access List**
3. **Add IP Address** → `0.0.0.0/0`
4. **Confirm**

### 3. Frontend (Vercel) 🔷

**Admin Panel:**
1. Vercel Dashboard → Admin Project
2. **Settings** → **Environment Variables**
3. Add:
   ```
   VITE_API_URL=https://takesolution-backend.onrender.com/api
   VITE_BASE_URL=https://takesolution-backend.onrender.com
   ```
4. Select: Production, Preview, Development
5. **Deployments** → **Redeploy**

**Client Panel:**
1. Vercel Dashboard → Client Project
2. Same environment variables as above
3. **Redeploy**

### 4. Final Backend Update 🔄

After Vercel deployment, get exact URLs and update Render:

1. Render Dashboard → Your Service → **Environment**
2. Update:
   ```
   CLIENT_URL=https://your-exact-vercel-url.vercel.app
   ADMIN_URL=https://your-exact-vercel-url.vercel.app
   ```
3. Auto-redeploys

## Testing

### Backend
- [ ] Health check works: `/api/health`
- [ ] MongoDB connected (check Render logs)
- [ ] No errors in logs

### Admin Panel
- [ ] Opens without errors
- [ ] Login page loads
- [ ] Can login successfully
- [ ] Dashboard loads
- [ ] Can upload files
- [ ] Can view/edit data

### Client
- [ ] Homepage loads
- [ ] Can fetch investor data
- [ ] PDFs load correctly
- [ ] No CORS errors

## Troubleshooting

### Backend not responding
- Check Render logs
- Verify MongoDB connection
- Check environment variables

### CORS errors
- Verify CLIENT_URL and ADMIN_URL match exactly
- Check Render logs for CORS errors
- Ensure URLs don't have trailing slashes

### Login not working
- Check backend URL in Vercel env vars
- Verify JWT_SECRET is set
- Check browser console for errors

## URLs Summary

After deployment, you'll have:

```
Backend:  https://takesolution-backend.onrender.com
Client:   https://take-solution-cms.vercel.app
Admin:    https://take-solution-cms.vercel.app/admin
```

## Important Notes

⚠️ **Render Free Tier:**
- Spins down after 15 min inactivity
- First request takes 30-60 seconds
- For production, upgrade to Starter ($7/month)

⚠️ **File Uploads:**
- Render free tier has ephemeral storage
- Files lost on redeploy
- Consider Cloudinary/S3 for production

⚠️ **MongoDB:**
- Ensure IP whitelist includes `0.0.0.0/0`
- Free tier: 512MB storage
- Monitor usage in Atlas dashboard

## Next Steps After Deployment

1. Test all features thoroughly
2. Set up custom domain (optional)
3. Configure SSL (automatic on Render/Vercel)
4. Set up monitoring/alerts
5. Plan for production upgrade if needed
