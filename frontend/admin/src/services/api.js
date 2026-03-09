import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout')
};

// Financial Result APIs
export const financialResultAPI = {
  getAll: (fiscalYear) => api.get(`/financial-result${fiscalYear ? `?fiscalYear=${fiscalYear}` : ''}`),
  getById: (id) => api.get(`/financial-result/${id}`),
  create: (data) => api.post('/financial-result', data),
  update: (id, data) => api.put(`/financial-result/${id}`, data),
  delete: (id) => api.delete(`/financial-result/${id}`)
};

// Annual Report APIs
export const annualReportAPI = {
  getAll: () => api.get('/annual-report'),
  getById: (id) => api.get(`/annual-report/${id}`),
  create: (data) => api.post('/annual-report', data),
  update: (id, data) => api.put(`/annual-report/${id}`, data),
  delete: (id) => api.delete(`/annual-report/${id}`)
};

// Investor Corner APIs
export const investorCornerAPI = {
  getAll: (category) => api.get(`/investor-corner${category ? `?category=${category}` : ''}`),
  getById: (id) => api.get(`/investor-corner/${id}`),
  create: (data) => api.post('/investor-corner', data),
  update: (id, data) => api.put(`/investor-corner/${id}`, data),
  delete: (id) => api.delete(`/investor-corner/${id}`)
};

// Corporate Governance APIs
export const corporateGovernanceAPI = {
  getAll: (category) => api.get(`/corporate-governance${category ? `?category=${category}` : ''}`),
  getById: (id) => api.get(`/corporate-governance/${id}`),
  create: (data) => api.post('/corporate-governance', data),
  update: (id, data) => api.put(`/corporate-governance/${id}`, data),
  delete: (id) => api.delete(`/corporate-governance/${id}`)
};

// Disclosure APIs
export const disclosureAPI = {
  getAll: (fiscalYear) => api.get(`/disclosure${fiscalYear ? `?fiscalYear=${fiscalYear}` : ''}`),
  getById: (id) => api.get(`/disclosure/${id}`),
  create: (data) => api.post('/disclosure', data),
  update: (id, data) => api.put(`/disclosure/${id}`, data),
  delete: (id) => api.delete(`/disclosure/${id}`)
};

// Board of Directors APIs
export const boardOfDirectorsAPI = {
  getAll: () => api.get('/board-of-directors'),
  getById: (id) => api.get(`/board-of-directors/${id}`),
  create: (data) => api.post('/board-of-directors', data),
  update: (id, data) => api.put(`/board-of-directors/${id}`, data),
  delete: (id) => api.delete(`/board-of-directors/${id}`)
};

// Financial Subsidary APIs
export const financialSubsidaryAPI = {
  getAll: () => api.get('/financial-subsidary'),
  getById: (id) => api.get(`/financial-subsidary/${id}`),
  create: (data) => api.post('/financial-subsidary', data),
  update: (id, data) => api.put(`/financial-subsidary/${id}`, data),
  delete: (id) => api.delete(`/financial-subsidary/${id}`)
};

// Upload API
export const uploadAPI = {
  upload: (formData) => {
    return api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  delete: (fileUrl) => api.delete('/upload', { data: { fileUrl } })
};

export default api;
