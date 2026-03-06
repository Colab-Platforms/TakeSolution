# Investor CMS Backend API

Backend API for Investor CMS system built with Node.js, Express, and MongoDB.

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the backend root directory:
```bash
cp .env.example .env
```

Update the `.env` file with your configuration:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/investor-cms
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:3000
ADMIN_URL=http://localhost:3001
MAX_FILE_SIZE=10485760
UPLOAD_PATH=uploads/investordata
```

### 3. Start MongoDB
Make sure MongoDB is running on your system.

### 4. Seed Admin User
```bash
npm run seed
```

This will create an admin user:
- Email: `admin@investor.com`
- Password: `admin123`

### 5. Start Server

Development mode (with nodemon):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

### Financial Result
- `GET /api/financial-result` - Get all
- `GET /api/financial-result/by-fy/:fiscalYear` - Get by fiscal year
- `GET /api/financial-result/:id` - Get by ID
- `POST /api/financial-result` - Create (Protected)
- `PUT /api/financial-result/:id` - Update (Protected)
- `DELETE /api/financial-result/:id` - Delete (Protected)

### Annual Report
- `GET /api/annual-report` - Get all
- `GET /api/annual-report/:id` - Get by ID
- `POST /api/annual-report` - Create (Protected)
- `PUT /api/annual-report/:id` - Update (Protected)
- `DELETE /api/annual-report/:id` - Delete (Protected)

### Investor Corner
- `GET /api/investor-corner?category=EOGM` - Get all (with optional category filter)
- `GET /api/investor-corner/:id` - Get by ID
- `POST /api/investor-corner` - Create (Protected)
- `PUT /api/investor-corner/:id` - Update (Protected)
- `DELETE /api/investor-corner/:id` - Delete (Protected)

### Corporate Governance
- `GET /api/corporate-governance?category=Policy` - Get all (with optional category filter)
- `GET /api/corporate-governance/:id` - Get by ID
- `POST /api/corporate-governance` - Create (Protected)
- `PUT /api/corporate-governance/:id` - Update (Protected)
- `DELETE /api/corporate-governance/:id` - Delete (Protected)

### Disclosure
- `GET /api/disclosure?fiscalYear=FY26` - Get all (with optional fiscal year filter)
- `GET /api/disclosure/:id` - Get by ID
- `POST /api/disclosure` - Create (Protected)
- `PUT /api/disclosure/:id` - Update (Protected)
- `DELETE /api/disclosure/:id` - Delete (Protected)

### Board of Directors
- `GET /api/board-of-directors` - Get all
- `GET /api/board-of-directors/:id` - Get by ID
- `POST /api/board-of-directors` - Create (Protected)
- `PUT /api/board-of-directors/:id` - Update (Protected)
- `DELETE /api/board-of-directors/:id` - Delete (Protected)

### Financial Subsidary
- `GET /api/financial-subsidary` - Get all
- `GET /api/financial-subsidary/:id` - Get by ID
- `POST /api/financial-subsidary` - Create (Protected)
- `PUT /api/financial-subsidary/:id` - Update (Protected)
- `DELETE /api/financial-subsidary/:id` - Delete (Protected)

### File Upload
- `POST /api/upload` - Upload file (Protected)
- `DELETE /api/upload` - Delete file (Protected)

## Testing with Postman

### 1. Login
```
POST http://localhost:5000/api/auth/login
Body (JSON):
{
  "email": "admin@investor.com",
  "password": "admin123"
}
```

Copy the token from response.

### 2. Use Token for Protected Routes
Add to Headers:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### 3. Upload File
```
POST http://localhost:5000/api/upload
Headers:
  Authorization: Bearer YOUR_TOKEN_HERE
Body (form-data):
  file: [Select PDF file]
  category: financial-result
```

### 4. Create Financial Result
```
POST http://localhost:5000/api/financial-result
Headers:
  Authorization: Bearer YOUR_TOKEN_HERE
Body (JSON):
{
  "fiscalYear": "FY26",
  "year": "FY-2026",
  "quarter": "Q1",
  "description": "Consolidated Q1 FY26",
  "pdfUrl": "/uploads/investordata/financial-results/1234567890-123456789.pdf",
  "pdfFileName": "1234567890-123456789.pdf"
}
```

## Project Structure
```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   └── server.js        # Entry point
├── uploads/             # Uploaded files
├── .env                 # Environment variables
└── package.json
```

## Technologies Used
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer (File Upload)
- bcryptjs (Password Hashing)
