import React, { useState, useEffect } from 'react';
import { financialSubsidaryAPI } from '../../services/api';

const FinancialSubsidary = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchFinancialSubsidary();
  }, []);

  const fetchFinancialSubsidary = async () => {
    setLoading(true);
    try {
      const response = await financialSubsidaryAPI.getAll();
      if (response.data.success && response.data.data.length > 0) {
        // Merge API data with hardcoded data
        // Create a map of years from API data to avoid duplicates
        const apiYears = new Set(response.data.data.map(item => item.year));
        
        // Filter hardcoded data to exclude years that exist in API
        const filteredHardcoded = hardcodedFinancialResultData.filter(
          item => !apiYears.has(item.year)
        );
        
        // Combine API data with remaining hardcoded data
        const mergedData = [...response.data.data, ...filteredHardcoded];
        
        // Sort by year (descending - newest first)
        mergedData.sort((a, b) => {
          const yearA = parseInt(a.year.replace('FY-', ''));
          const yearB = parseInt(b.year.replace('FY-', ''));
          return yearB - yearA;
        });
        
        setApiData(mergedData);
      } else {
        // If API returns empty, keep apiData empty to fallback to hardcoded
        setApiData([]);
      }
    } catch (error) {
      console.error('Error fetching financial subsidary data:', error);
      // On error, keep apiData empty to fallback to hardcoded
      setApiData([]);
    } finally {
      setLoading(false);
    }
  };

  const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

  // Hardcoded data as fallback
  const hardcodedFinancialResultData = [
        { type: 'Other Disclosures', year: 'FY-2017', description: 'subsidiary-company-financials_fy-2016-17', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2016-17.pdf' },
        { type: 'Other Disclosures', year: 'FY-2018', description: 'subsidiary-company-financials_fy-2017-18', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2017-18.pdf' },
        { type: 'Other Disclosures', year: 'FY-2019', description: 'subsidiary-company-financials_fy-2018-19', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2018-19.pdf' },
        { type: 'Other Disclosures', year: 'FY-2020', description: 'subsidiary-company-financials_fy-2019-20', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2019-20.pdf' },
        { type: 'Other Disclosures', year: 'FY-2021', description: 'subsidiary-company-financials_fy-2020-21', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2020-21.pdf' },
        { type: 'Other Disclosures', year: 'FY-2022', description: 'subsidiary-company-financials_fy-2021-22', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2021-22.pdf' },
        { type: 'Other Disclosures', year: 'FY-2023', description: 'subsidiary-company-financials_fy-2022-23', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2022-23.pdf' },
        { type: 'Other Disclosures', year: 'FY-2024', description: 'subsidiary-company-financials_fy-2023-24', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2023-24.pdf' }
    ];

    // Use API data if available, otherwise fallback to hardcoded
    const financialResultData = apiData.length > 0
      ? apiData.map(item => ({
          type: item.type || 'Other Disclosures',
          year: item.year,
          description: item.description,
          link: `${BASE_URL}${item.pdfUrl}`
        }))
      : hardcodedFinancialResultData;

    if (loading) {
      return (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }

    return (
        <div className="tab-content active">
            {/* <h3 className="content-title">Quarter - 3</h3> */}

            {/* Year Tabs */}
            {/* <div className="disclosure-year-tabs"> */}
            {/* {years.map((year) => (
          <button
            key={year}
            className={`disclosure-year-btn ${selectedYear === year ? 'active' : ''}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))} */}
            {/* </div> */}

            {/* Disclosure Table */}
            <div className="disclosure-table-wrapper">
                <table className="disclosure-table">
                    <thead>
                        <tr>
                            {/* <th>Type</th> */}
                            <th>Year</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {financialResultData.length === 0 ? (
                          <tr>
                            <td colSpan="2" className="text-center py-4 text-muted">
                              No data available
                            </td>
                          </tr>
                        ) : (
                          financialResultData.map((item, index) => (
                            <tr key={index}>
                                {/* <td>{item.type}</td> */}
                                <td>{item.year}</td>
                                <td>
                                    <a href={item.link} className="disclosure-description-link" target="_blank" rel="noopener noreferrer">
                                        <span className="pdf-icon-small">📄</span>
                                        {item.description}
                                    </a>
                                </td>
                            </tr>
                          ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Annual Return Section */}
            {/* <div className="annual-return-section">
        <h4 className="annual-return-title">Annual Return</h4>
        <div className="annual-return-table">
          <div className="annual-return-row annual-return-header">
            <div className="annual-return-cell">Financial Year</div>
            {annualReturnYears.map((item, index) => (
              <div key={index} className="annual-return-cell">{item.year}</div>
            ))}
          </div>
          <div className="annual-return-row">
            <div className="annual-return-cell">Annual Return</div>
            {annualReturnYears.map((item, index) => (
              <div key={index} className="annual-return-cell">
                <a href={item.link} className="pdf-link" target="_blank" rel="noopener noreferrer">
                  📄
                </a>
              </div>
            ))}
          </div>
        </div>
      </div> */}
        </div>
    );
}

export default FinancialSubsidary


