# Render Deployment Guide - Backend

## Quick Setup

### Step 1: Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub

### Step 2: Create New Web Service

1. Dashboard → **New** → **Web Service**
2. Connect your GitHub repository
3. Select your repo: `TakeSolutionCMS`

### Step 3: Configure Service

**Basic Settings:**
```
Name: takesolution-backend
Region: Singapore (or closest to you)
Branch: cms
Root Directory: backend
Runtime: Node
Build Command: npm install
Start Command: npm start
```

**Instance Type:**
- Free (for testing)
- Starter ($7/month for production)

### Step 4: Environment Variables

Click **Advanced** → Add Environment Variables:

```
NODE_ENV=production

MONGODB_URI=mongodb+srv://takesolution:admin123@takesolution.y8z6ydv.mongodb.net/?appName=TakeSolution

JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-2024

JWT_EXPIRE=7d

CLIENT_URL=https://take-solution-cms.vercel.app

ADMIN_URL=https://take-solution-cms.vercel.app

MAX_FILE_SIZE=10485760

UPLOAD_PATH=uploads/investordata
```

### Step 5: Deploy

1. Click **Create Web Service**
2. Wait for deployment (5-10 minutes)
3. Copy your service URL (e.g., `https://takesolution-backend.onrender.com`)

### Step 6: Update MongoDB Atlas

1. Go to MongoDB Atlas
2. **Network Access** → **IP Access List**
3. Click **Add IP Address**
4. Add: `0.0.0.0/0` (Allow from anywhere)
5. Click **Confirm**

### Step 7: Update Vercel Environment Variables

**Admin Panel:**
1. Vercel Dashboard → Admin Project → Settings → Environment Variables
2. Update:
```
VITE_API_URL=https://takesolution-backend.onrender.com/api
VITE_BASE_URL=https://takesolution-backend.onrender.com
```

**Client Panel:**
1. Vercel Dashboard → Client Project → Settings → Environment Variables
2. Update:
```
VITE_API_URL=https://takesolution-backend.onrender.com/api
VITE_BASE_URL=https://takesolution-backend.onrender.com
```

3. Redeploy both projects

### Step 8: Update Backend CORS (After Vercel Deployment)

1. Get your Vercel URLs:
   - Client: `https://take-solution-cms.vercel.app`
   - Admin: `https://take-solution-cms.vercel.app/admin`

2. Update Render Environment Variables:
```
CLIENT_URL=https://take-solution-cms.vercel.app
ADMIN_URL=https://take-solution-cms.vercel.app
```

3. Render will auto-redeploy

## Testing

### Test Backend Health
```
https://takesolution-backend.onrender.com/api/health
```

Should return:
```json
{
  "success": true,
  "message": "Server is running"
}
```

### Test from Frontend
1. Open admin panel
2. Try to login
3. Check browser console - should call Render URL

## Important Notes

### Free Tier Limitations
- Service spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- 750 hours/month free

### Upgrade to Paid Plan
For production, use Starter plan ($7/month):
- Always running (no spin-down)
- Better performance
- More resources

### File Uploads
Render's free tier has ephemeral storage. Files uploaded will be lost on redeploy.

**Solutions:**
1. Use Cloudinary for images
2. Use AWS S3 for files
3. Upgrade to paid plan with persistent disk

## Troubleshooting

### Build Failed
Check Render logs:
- Dashboard → Your Service → Logs
- Look for npm install errors
- Ensure all dependencies in package.json

### Service Not Starting
Common issues:
1. Wrong start command → Should be `npm start`
2. Missing environment variables
3. MongoDB connection failed
4. Port binding issue (Render auto-assigns PORT)

### CORS Errors
1. Check CLIENT_URL and ADMIN_URL in Render
2. Ensure exact match with Vercel URLs
3. Include both http and https if testing locally

### MongoDB Connection Failed
1. Check MONGODB_URI is correct
2. Verify MongoDB Atlas IP whitelist: `0.0.0.0/0`
3. Test connection string locally first

## Render Dashboard URLs

- **Service URL**: `https://takesolution-backend.onrender.com`
- **Dashboard**: `https://dashboard.render.com`
- **Logs**: Dashboard → Your Service → Logs
- **Environment**: Dashboard → Your Service → Environment

## Auto-Deploy

Render automatically deploys when you push to `cms` branch.

To disable:
- Settings → Auto-Deploy → Off

## Custom Domain (Optional)

1. Settings → Custom Domain
2. Add your domain
3. Update DNS records as shown
4. Wait for SSL certificate

## Monitoring

Free tier includes:
- Basic metrics
- Logs (7 days retention)
- Email alerts

## Cost Estimate

- **Free**: $0/month (with limitations)
- **Starter**: $7/month (recommended for production)
- **Standard**: $25/month (for high traffic)

## Next Steps

1. ✅ Deploy backend to Render
2. ✅ Get Render URL
3. ✅ Update Vercel environment variables
4. ✅ Update Render CORS settings
5. ✅ Test login from admin panel
6. ✅ Test API calls from client
