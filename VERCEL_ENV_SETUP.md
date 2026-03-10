# Vercel Environment Variables Setup

## Problem
Admin panel production pe `localhost:5000` ko call kar raha hai instead of Railway backend URL.

## Solution: Add Environment Variables in Vercel

### Step 1: Get Railway Backend URL

1. Railway Dashboard pe jao
2. Your backend service select karo
3. **Settings** → **Networking** → **Public Networking**
4. URL copy karo (e.g., `https://takesolution-production.up.railway.app`)

### Step 2: Add Variables in Vercel

#### For Admin Panel:

1. Vercel Dashboard → Your Admin Project
2. **Settings** → **Environment Variables**
3. Add these variables:

```
Name: VITE_API_URL
Value: https://your-railway-app.up.railway.app/api
Environments: ✓ Production ✓ Preview ✓ Development

Name: VITE_BASE_URL  
Value: https://your-railway-app.up.railway.app
Environments: ✓ Production ✓ Preview ✓ Development
```

#### For Client Panel (if separate):

Same variables as above.

### Step 3: Redeploy

After adding environment variables:
1. Go to **Deployments** tab
2. Click **...** (three dots) on latest deployment
3. Click **Redeploy**

OR

Push a new commit to trigger automatic deployment.

### Step 4: Update Backend CORS

Update Railway environment variables:

```
CLIENT_URL=https://take-solution-cms.vercel.app
ADMIN_URL=https://take-solution-admin-qaso7z9rx-colab-platforms-projects.vercel.app
```

**Better:** Use your custom domain or main Vercel domain (not preview URLs).

## Vercel Environment Variables - Complete List

### Admin Panel Variables:
```
VITE_API_URL=https://your-backend.railway.app/api
VITE_BASE_URL=https://your-backend.railway.app
```

### Client Panel Variables:
```
VITE_API_URL=https://your-backend.railway.app/api
VITE_BASE_URL=https://your-backend.railway.app
```

## Important Notes

1. **VITE_ Prefix Required**: Vite only exposes env vars with `VITE_` prefix
2. **Redeploy Required**: Changes take effect after redeployment
3. **No Trailing Slash**: Don't add `/` at the end of URLs
4. **HTTPS Only**: Use `https://` for production

## Verification

After deployment, check browser console:
```javascript
// Should show Railway URL, not localhost
console.log(import.meta.env.VITE_API_URL)
```

## Quick Fix for Testing

If you want to test immediately without redeploying:

1. Build locally with production env:
```bash
cd frontend/admin
VITE_API_URL=https://your-backend.railway.app/api npm run build
```

2. Deploy the build folder manually

## Common Mistakes

❌ `REACT_APP_API_URL` (wrong prefix for Vite)
✅ `VITE_API_URL` (correct)

❌ `http://localhost:5000` (local URL in production)
✅ `https://your-app.railway.app` (production URL)

❌ Forgot to redeploy after adding variables
✅ Always redeploy after env changes

## Vercel CLI Method (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Add environment variables
vercel env add VITE_API_URL production
# Enter: https://your-backend.railway.app/api

vercel env add VITE_BASE_URL production
# Enter: https://your-backend.railway.app

# Redeploy
vercel --prod
```
