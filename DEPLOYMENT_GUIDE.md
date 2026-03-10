# Deployment Guide

## Architecture
- **Backend**: Railway/Render
- **Frontend (Client + Admin)**: Single Vercel Deployment

## Single Domain Setup (Recommended)

With this setup:
- Client: `https://yourdomain.vercel.app`
- Admin: `https://yourdomain.vercel.app/admin`

### Backend Deployment (Railway/Render)

1. Deploy backend to Railway or Render
2. Set environment variables:
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://takesolution:admin123@takesolution.y8z6ydv.mongodb.net/?appName=TakeSolution
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
CLIENT_URL=https://yourdomain.vercel.app
ADMIN_URL=https://yourdomain.vercel.app
MAX_FILE_SIZE=10485760
UPLOAD_PATH=uploads/investordata
```

### Frontend Deployment (Vercel)

1. Connect your GitHub repo to Vercel
2. **Root Directory**: Leave empty (root of repo)
3. **Framework Preset**: Other
4. **Build Command**: `npm run build`
5. **Output Directory**: `public`
6. **Install Command**: `npm install`

7. **Environment Variables** (in Vercel dashboard):
```
VITE_API_URL=https://your-backend-url.railway.app/api
VITE_BASE_URL=https://your-backend-url.railway.app
```

### How It Works

- Root path (`/`) serves the client app
- `/admin` path serves the admin panel
- Both apps share the same domain
- Build script merges both builds into `public` folder

### Local Development

```bash
# Client (port 5173)
cd frontend/client
npm run dev

# Admin (port 3001)
cd frontend/admin
npm run dev

# Backend (port 5000)
cd backend
npm run dev
```

### Production Build Test

```bash
# Build both apps
npm run build

# Serve locally to test
npx serve public
```

## Alternative: Separate Vercel Projects

### Backend Deployment (Railway/Render)

1. Deploy backend to Railway or Render
2. Set environment variables:
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://takesolution:admin123@takesolution.y8z6ydv.mongodb.net/?appName=TakeSolution
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
CLIENT_URL=https://your-client-domain.vercel.app
ADMIN_URL=https://your-admin-domain.vercel.app
MAX_FILE_SIZE=10485760
UPLOAD_PATH=uploads/investordata
```

### Client Frontend Deployment (Vercel)

1. Create new Vercel project for client
2. **Root Directory**: `frontend/client`
3. **Framework Preset**: Vite
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. **Environment Variables**:
```
VITE_API_URL=https://your-backend-url.railway.app/api
VITE_BASE_URL=https://your-backend-url.railway.app
```

### Admin Frontend Deployment (Vercel)

1. Create new Vercel project for admin
2. **Root Directory**: `frontend/admin`
3. **Framework Preset**: Vite
4. **Build Command**: `npm run build`
5. **Output Directory**: `build`
6. **Environment Variables**:
```
VITE_API_URL=https://your-backend-url.railway.app/api
VITE_BASE_URL=https://your-backend-url.railway.app
```

## Option 2: Single Vercel Project (Monorepo)

### Vercel Configuration

1. Deploy entire repo to Vercel
2. **Framework Preset**: Other
3. **Build Command**: Leave empty (handled by vercel.json)
4. **Output Directory**: Leave empty
5. **Environment Variables**:
```
VITE_API_URL=https://your-backend-url.railway.app/api
VITE_BASE_URL=https://your-backend-url.railway.app
```

### Access URLs
- Client: `https://your-domain.vercel.app`
- Admin: `https://your-domain.vercel.app/admin`

## Post-Deployment Steps

1. Update backend CORS URLs with actual Vercel URLs
2. Test login on admin panel
3. Test API calls from client
4. Verify file uploads work correctly

## Troubleshooting

### CORS Errors
- Ensure backend `CLIENT_URL` and `ADMIN_URL` match exact Vercel URLs
- Include both `www` and non-`www` versions if needed

### Build Failures
- Check Node version (use Node 18+)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

### Environment Variables Not Working
- Vite requires `VITE_` prefix
- Redeploy after adding env variables
- Clear build cache if needed
