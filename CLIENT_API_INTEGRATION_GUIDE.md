# Client API Integration Guide

This guide shows how to update the remaining client components to use the API.

## ✅ Already Updated Components

1. **FinancialResult.jsx** - Fetches from API with loading state
2. **AnnualReport.jsx** - Fetches from API with loading state

## 📝 Pattern to Follow for Remaining Components

### General Pattern

```javascript
import { useState, useEffect } from 'react';
import { apiName } from '../../services/api';

const Component = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await apiName.getAll();
      if (response.data.success) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error('Error:', error);
      // Keep hardcoded data as fallback
    } finally {
      setLoading(false);
    }
  };

  // ... rest of component with loading state
  if (loading) {
    return <div className="spinner-border">Loading...</div>;
  }

  // Use data from API, with hardcoded as fallback
};
```

## 🔧 Specific Updates Needed

### 3. InvestorCorner.jsx

**Import:**
```javascript
import { useState, useEffect } from 'react';
import { investorCornerAPI } from '../../services/api';
```

**Add state:**
```javascript
const [loading, setLoading] = useState(false);
const [apiData, setApiData] = useState({});
```

**Add fetch function:**
```javascript
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  setLoading(true);
  try {
    const response = await investorCornerAPI.getAll();
    if (response.data.success) {
      // Group by category
      const grouped = response.data.data.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      }, {});
      setApiData(grouped);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setLoading(false);
  }
};
```

**Update data usage:**
```javascript
// Helper to get data (API first, then hardcoded)
const getYears = (category, hardcodedData) => {
  if (apiData[category]?.length > 0) {
    return apiData[category].map(item => ({
      year: item.year,
      link: `${BASE_URL}${item.pdfUrl}`
    }));
  }
  return hardcodedData.years;
};

// Use it
const eogmYears = getYears('EOGM', eogmData);
```

### 4. CorporateGovernance.jsx

**Import:**
```javascript
import { useState, useEffect } from 'react';
import { corporateGovernanceAPI } from '../../services/api';
```

**Add state & fetch:**
```javascript
const [loading, setLoading] = useState(false);
const [apiData, setApiData] = useState({});
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  setLoading(true);
  try {
    const response = await corporateGovernanceAPI.getAll();
    if (response.data.success) {
      const grouped = response.data.data.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      }, {});
      setApiData(grouped);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setLoading(false);
  }
};
```

**Update policies array:**
```javascript
const getPolicies = (category, hardcodedPolicies) => {
  if (apiData[category]?.length > 0) {
    return apiData[category].map(item => ({
      title: item.title,
      link: `${BASE_URL}${item.pdfUrl}`
    }));
  }
  return hardcodedPolicies;
};

const policies = getPolicies('Policy', hardcodedPolicies);
const dematDocuments = getPolicies('Dematerialisation', hardcodedDematDocs);
```

### 5. Disclosure.jsx

**Import:**
```javascript
import { useState, useEffect } from 'react';
import { disclosureAPI } from '../../services/api';
```

**Add state:**
```javascript
const [loading, setLoading] = useState(false);
const [disclosureData, setDisclosureData] = useState({});
```

**Add fetch (similar to FinancialResult):**
```javascript
useEffect(() => {
  fetchData();
}, [selectedYear]);

const fetchData = async () => {
  setLoading(true);
  try {
    const response = await disclosureAPI.getAll(selectedYear);
    if (response.data.success) {
      setDisclosureData({ [selectedYear]: response.data.data });
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    setLoading(false);
  }
};
```

**Update data usage:**
```javascript
const currentYearData = disclosureData[selectedYear] || hardcodedData[selectedYear] || [];
```

### 6. BoardOfDirectors.jsx

**Import:**
```javascript
import { useState, useEffect } from 'react';
import { boardOfDirectorsAPI } from '../../services/api';
```

**Add state:**
```javascript
const [loading, setLoading] = useState(false);
const [boardImages, setBoardImages] = useState([]);
const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';
```

**Add fetch:**
```javascript
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  setLoading(true);
  try {
    const response = await boardOfDirectorsAPI.getAll();
    if (response.data.success) {
      const images = response.data.data.map(item => `${BASE_URL}${item.imageUrl}`);
      setBoardImages(images);
    }
  } catch (error) {
    console.error('Error:', error);
    // Use hardcoded images as fallback
    setBoardImages(hardcodedBoardImages);
  } finally {
    setLoading(false);
  }
};
```

**Update render:**
```javascript
{boardImages.map((image, index) => (
  <img key={index} src={image} alt={`Board ${index + 1}`} />
))}
```

### 7. FinancialSubsidary.jsx

**Same pattern as AnnualReport:**
```javascript
import { useState, useEffect } from 'react';
import { financialSubsidaryAPI } from '../../services/api';

const [loading, setLoading] = useState(false);
const [data, setData] = useState([]);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  setLoading(true);
  try {
    const response = await financialSubsidaryAPI.getAll();
    if (response.data.success) {
      setData(response.data.data);
    }
  } catch (error) {
    console.error('Error:', error);
    setData(hardcodedData);
  } finally {
    setLoading(false);
  }
};
```

## 🎨 Loading State UI

Add this to all components:

```javascript
if (loading) {
  return (
    <div className="text-center py-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3 text-muted">Loading data...</p>
    </div>
  );
}
```

## 🔗 Environment Variables

Create `.env` file in client root:

```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_BASE_URL=http://localhost:5000
```

## ✅ Testing Checklist

1. Start backend: `cd backend && npm run dev`
2. Start client: `npm start`
3. Check each tab loads data
4. Verify PDFs open correctly
5. Test with no backend (should show hardcoded data)
6. Check browser console for errors

## 🚀 Benefits

- ✅ Dynamic data from database
- ✅ Easy updates via admin panel
- ✅ Fallback to hardcoded data if API fails
- ✅ Loading states for better UX
- ✅ No page refresh needed after admin updates

## 📌 Key Points

1. **Always keep hardcoded data** as fallback
2. **Add loading states** for better UX
3. **Use BASE_URL** for PDF links
4. **Handle errors gracefully**
5. **Test both API and fallback modes**

## 🔄 Data Flow

```
Admin Panel → Backend API → MongoDB → Backend API → Client
                                                      ↓
                                              (if API fails)
                                                      ↓
                                            Hardcoded Data
```

## 📝 Summary

- **2 components fully updated**: FinancialResult, AnnualReport
- **5 components need updates**: InvestorCorner, CorporateGovernance, Disclosure, BoardOfDirectors, FinancialSubsidary
- **Pattern is consistent** across all components
- **Fallback mechanism** ensures site always works
