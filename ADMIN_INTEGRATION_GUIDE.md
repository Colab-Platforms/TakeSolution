# Admin Panel Integration Guide

## Best Approach: Build-Time Integration

This approach builds the admin panel and serves it from the client app at `/admin` route.

### Why This Approach?
- ✅ Single deployment (easier hosting)
- ✅ No CORS issues
- ✅ Works with Netlify/Vercel out of the box
- ✅ Admin and client remain separate during development
- ✅ Cost-effective (one hosting plan)

---

## Implementation Steps

### Step 1: Configure Admin for `/admin` Base Path

Create/update `admin/.env.production`:

```env
PUBLIC_URL=/admin
REACT_APP_API_URL=https://your-backend-url.com/api
```

### Step 2: Update Admin Build Output

Modify `admin/package.json` build script:

```json
{
  "scripts": {
    "build": "react-scripts build && npm run copy-build",
    "copy-build": "node copy-build.js"
  }
}
```

### Step 3: Create Build Copy Script

Create `admin/copy-build.js`:

```javascript
const fs = require('fs-extra');
const path = require('path');

const source = path.join(__dirname, 'build');
const destination = path.join(__dirname, '../client/public/admin');

// Remove old admin build
if (fs.existsSync(destination)) {
  fs.removeSync(destination);
}

// Copy new build
fs.copySync(source, destination);
console.log('✅ Admin build copied to client/public/admin');
```

### Step 4: Update Client Routes

Add admin route to `client/src/Routes/Routes.jsx`:

```jsx
// This route will serve the static admin files
{
  path: "/admin/*",
  element: null, // Static files will be served directly
}
```

### Step 5: Configure Client for Static Admin

Update `client/vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
})
```

### Step 6: Update Netlify/Vercel Config

**For Netlify** (`client/netlify.toml`):
```toml
[[redirects]]
  from = "/admin/*"
  to = "/admin/index.html"
  status = 200

[[redirects]]
  from = "/api/*"
  to = "https://your-backend-url.com/api/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**For Vercel** (`client/vercel.json`):
```json
{
  "rewrites": [
    {
      "source": "/admin/:path((?!.*\\.).*)",
      "destination": "/admin/index.html"
    },
    {
      "source": "/api/:path*",
      "destination": "https://your-backend-url.com/api/:path*"
    }
  ]
}
```

---

## Build & Deploy Process

### Development
```bash
# Terminal 1 - Run client
cd client
npm run dev

# Terminal 2 - Run admin
cd admin
npm start

# Terminal 3 - Run backend
cd backend
npm start
```

### Production Build
```bash
# 1. Build admin first
cd admin
npm run build

# 2. Build client (includes admin)
cd ../client
npm run build

# 3. Deploy client/dist folder
```

---

## Alternative: Quick Redirect Approach

If you want something simpler for now, create `client/src/Pages/AdminPanel.jsx`:

```jsx
import { useEffect } from 'react';

const AdminPanel = () => {
  useEffect(() => {
    // Redirect to admin running on port 3000
    window.location.href = 'http://localhost:3000';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <p>Redirecting to Admin Panel...</p>
    </div>
  );
};

export default AdminPanel;
```

Add route in `client/src/Routes/Routes.jsx`:
```jsx
import AdminPanel from "../Pages/AdminPanel";

{
  path: "/admin",
  element: <AdminPanel />
}
```

---

## Recommended: Use Build-Time Integration

The build-time integration is best for production. The redirect approach is fine for development but requires running two servers in production.
