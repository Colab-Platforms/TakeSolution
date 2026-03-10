# Railway Deployment Troubleshooting

## Common Issues & Solutions

### Issue: "Application failed to respond"

This usually means:
1. Environment variables missing
2. MongoDB connection failed
3. Port binding issue
4. Build/Start command incorrect

## Step-by-Step Fix

### 1. Check Railway Logs

Railway Dashboard → Your Service → **Deployments** → **View logs**

Look for errors like:
- `MongooseError: The uri parameter to openUri() must be a string`
- `ECONNREFUSED` (MongoDB connection refused)
- `Missing environment variables`

### 2. Set Environment Variables

Railway Dashboard → Your Service → **Variables** tab

Add these variables:

```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://takesolution:admin123@takesolution.y8z6ydv.mongodb.net/?appName=TakeSolution
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-2024
JWT_EXPIRE=7d
CLIENT_URL=https://your-vercel-domain.vercel.app
ADMIN_URL=https://your-vercel-domain.vercel.app
MAX_FILE_SIZE=10485760
UPLOAD_PATH=uploads/investordata
```

**Important:** After adding variables, click **Deploy** to redeploy!

### 3. Verify MongoDB Connection

Test your MongoDB URI:
- Go to MongoDB Atlas
- Check if IP whitelist includes `0.0.0.0/0` (allow all)
- Verify username/password are correct
- Test connection string

### 4. Check Railway Settings

**Settings** → **Deploy**:
- Root Directory: `backend` (if monorepo) or `/` (if backend only)
- Build Command: Leave empty (auto-detected)
- Start Command: `npm start`

### 5. Add Root Route for Testing

The server should respond on root path. Check if `/api/health` works:
`https://your-app.railway.app/api/health`

### 6. Check Nixpacks Build

Railway uses Nixpacks. Ensure `package.json` has:
```json
{
  "scripts": {
    "start": "node src/server.js"
  }
}
```

### 7. MongoDB Atlas IP Whitelist

1. Go to MongoDB Atlas
2. Network Access → IP Access List
3. Add IP: `0.0.0.0/0` (Allow from anywhere)
4. Save

### 8. Test Locally with Production ENV

```bash
cd backend

# Set production-like environment
export NODE_ENV=production
export MONGODB_URI="your-mongodb-uri"
export JWT_SECRET="your-secret"
export PORT=5000

# Run
npm start
```

## Quick Checklist

- [ ] All environment variables set in Railway
- [ ] MongoDB Atlas allows Railway IPs (0.0.0.0/0)
- [ ] `npm start` script exists in package.json
- [ ] Railway root directory is correct
- [ ] Redeployed after adding variables
- [ ] Check logs for specific errors

## Get Railway Service URL

After successful deployment:
1. Railway Dashboard → Your Service
2. Copy the URL (e.g., `https://your-app.up.railway.app`)
3. Test: `https://your-app.up.railway.app/api/health`

## Update Frontend Environment Variables

Once backend is working, update Vercel:

```
VITE_API_URL=https://your-app.up.railway.app/api
VITE_BASE_URL=https://your-app.up.railway.app
```

## Still Not Working?

Check Railway logs for specific error:
```bash
# Common errors:

# 1. MongoDB connection
Error: connect ECONNREFUSED
→ Fix: Check MongoDB URI and IP whitelist

# 2. Missing env vars
TypeError: Cannot read property 'replace' of undefined
→ Fix: Add all environment variables

# 3. Port binding
Error: listen EADDRINUSE
→ Fix: Railway auto-assigns PORT, use process.env.PORT

# 4. Module not found
Error: Cannot find module 'express'
→ Fix: Ensure dependencies in package.json, redeploy
```
