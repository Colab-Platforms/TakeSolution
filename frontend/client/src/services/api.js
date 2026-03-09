import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Financial Result APIs
export const financialResultAPI = {
  getAll: (fiscalYear) => api.get(`/financial-result${fiscalYear ? `?fiscalYear=${fiscalYear}` : ''}`),
  getByFiscalYear: (fiscalYear) => api.get(`/financial-result/by-fy/${fiscalYear}`)
};

// Annual Report APIs
export const annualReportAPI = {
  getAll: () => api.get('/annual-report')
};

// Investor Corner APIs
export const investorCornerAPI = {
  getAll: (category) => api.get(`/investor-corner${category ? `?category=${category}` : ''}`)
};

// Corporate Governance APIs
export const corporateGovernanceAPI = {
  getAll: (category) => api.get(`/corporate-governance${category ? `?category=${category}` : ''}`)
};

// Disclosure APIs
export const disclosureAPI = {
  getAll: (fiscalYear) => api.get(`/disclosure${fiscalYear ? `?fiscalYear=${fiscalYear}` : ''}`)
};

// Board of Directors APIs
export const boardOfDirectorsAPI = {
  getAll: () => api.get('/board-of-directors')
};

// Financial Subsidary APIs
export const financialSubsidaryAPI = {
  getAll: () => api.get('/financial-subsidary')
};

export default api;
