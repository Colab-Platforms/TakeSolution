require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const createUploadDirectories = require('./utils/createUploadDirs');

// Create upload directories on startup
createUploadDirectories();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: true, // Allow all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/financial-result', require('./routes/financialResultRoutes'));
app.use('/api/annual-report', require('./routes/annualReportRoutes'));
app.use('/api/investor-corner', require('./routes/investorCornerRoutes'));
app.use('/api/corporate-governance', require('./routes/corporateGovernanceRoutes'));
app.use('/api/disclosure', require('./routes/disclosureRoutes'));
app.use('/api/board-of-directors', require('./routes/boardOfDirectorsRoutes'));
app.use('/api/financial-subsidary', require('./routes/financialSubsidaryRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes'));

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running' });
});

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
