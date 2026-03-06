# Quick Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)

## Installation Steps

### 1. Navigate to backend folder
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create .env file
```bash
# Copy the example file
cp .env.example .env

# Edit .env with your settings
# For local development, you can use the default values
```

### 4. Start MongoDB
If using local MongoDB:
```bash
# Windows
net start MongoDB

# Mac/Linux
sudo systemctl start mongod
```

Or use MongoDB Atlas (cloud) and update MONGODB_URI in .env

### 5. Seed admin user
```bash
npm run seed
```

Output:
```
Admin user created successfully
Email: admin@investor.com
Password: admin123
```

### 6. Start the server
```bash
# Development mode (auto-restart on changes)
npm run dev

# Production mode
npm start
```

Server will start on: `http://localhost:5000`

## Verify Installation

### Test health endpoint
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "Server is running"
}
```

### Test login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@investor.com","password":"admin123"}'
```

Expected response:
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "...",
      "username": "admin",
      "email": "admin@investor.com",
      "role": "admin"
    }
  },
  "message": "Login successful"
}
```

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check MONGODB_URI in .env file
- For MongoDB Atlas, whitelist your IP address

### Port Already in Use
- Change PORT in .env file
- Or kill the process using port 5000

### File Upload Issues
- Check MAX_FILE_SIZE in .env
- Ensure uploads folder has write permissions

## Next Steps
- Backend is ready!
- Now you can build the admin panel
- Then update the client to use the API
