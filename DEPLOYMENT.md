# Deployment Guide

## Overview
- **Client**: Vercel
- **Admin**: Vercel
- **Backend**: Railway

## Backend Deployment (Railway)

### 1. Setup Railway Project
1. Go to [railway.app](https://railway.app) and sign in
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Choose the `backend` folder as root directory

### 2. Configure Environment Variables
Add these in Railway dashboard:
```
NODE_ENV=production
PORT=5000
MONGODB_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<generate-strong-secret>
CORS_ORIGIN=https://your-client-domain.vercel.app,https://your-admin-domain.vercel.app
```

### 3. Add MongoDB Atlas
1. Create free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Get connection string
3. Add to Railway as `MONGODB_URI`

### 4. Deploy
- Railway auto-deploys on push
- Get your backend URL: `https://your-app.railway.app`

## Client Deployment (Vercel)

### 1. Deploy Client
1. Go to [vercel.com](https://vercel.com)
2. Import your repository
3. Set root directory to `client`
4. Framework preset: Vite

### 2. Environment Variables
Add in Vercel dashboard:
```
VITE_API_URL=https://your-backend.railway.app/api
```

### 3. Build Settings
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Admin Deployment (Vercel)

### 1. Create New Vercel Project
1. Import same repository again
2. Set root directory to `admin`
3. Framework preset: Create React App

### 2. Environment Variables
Add in Vercel dashboard:
```
REACT_APP_API_URL=https://your-backend.railway.app/api
```

### 3. Build Settings
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: `npm install`

## Post-Deployment Steps

### 1. Update CORS in Backend
Update your Railway environment variable:
```
CORS_ORIGIN=https://client-domain.vercel.app,https://admin-domain.vercel.app
```

### 2. Seed Admin User
Run in Railway terminal:
```bash
npm run seed
```

### 3. Test Deployments
- Client: Check public pages load
- Admin: Login with seeded credentials
- Backend: Test API endpoints

## Environment Variables Summary

### Backend (Railway)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
CORS_ORIGIN=https://client.vercel.app,https://admin.vercel.app
```

### Client (Vercel)
```env
VITE_API_URL=https://your-backend.railway.app/api
```

### Admin (Vercel)
```env
REACT_APP_API_URL=https://your-backend.railway.app/api
```

## Troubleshooting

### CORS Errors
- Ensure backend `CORS_ORIGIN` includes both Vercel URLs
- Check Railway logs for CORS configuration

### Build Failures
- Check Node version compatibility
- Verify all dependencies in package.json
- Review build logs in Vercel/Railway

### Database Connection
- Whitelist Railway IP in MongoDB Atlas (or use 0.0.0.0/0)
- Verify connection string format
- Check MongoDB Atlas cluster is running

### File Uploads
- Railway provides ephemeral storage
- Consider using AWS S3, Cloudinary, or similar for production
- Current setup stores files in `uploads/` which will reset on redeploy

## Recommended Improvements

1. **File Storage**: Migrate to cloud storage (S3, Cloudinary)
2. **Environment Management**: Use separate staging/production environments
3. **Monitoring**: Add error tracking (Sentry, LogRocket)
4. **CI/CD**: Configure automated tests before deployment
5. **Custom Domains**: Add custom domains in Vercel/Railway settings
