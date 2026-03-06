import React, { useState, useEffect } from 'react';
import { corporateGovernanceAPI } from '../../services/api';

const CorporateGovernance = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    setLoading(true);
    try {
      const response = await corporateGovernanceAPI.getAll();
      if (response.data.success) {
        // Group data by category
        const grouped = response.data.data.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = [];
          }
          acc[item.category].push(item);
          return acc;
        }, {});
        setApiData(grouped);
      }
    } catch (error) {
      console.error('Error fetching corporate governance data:', error);
    } finally {
      setLoading(false);
    }
  };

  const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

  // Helper function to get data for a category (API first, then fallback to hardcoded)
  const getDataForCategory = (category, hardcodedData) => {
    if (apiData[category] && apiData[category].length > 0) {
      return apiData[category].map(item => ({
        title: item.title,
        link: `${BASE_URL}${item.pdfUrl}`
      }));
    }
    return hardcodedData;
  };

  // Corporate Governance Policies (hardcoded as fallback)
  const policies = [
    { title: 'Code of Conduct for Directors & Senior Management Personnel', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Code of Conduct for Directors and Senior Management Personnel.pdf' },
    { title: 'Code of Conduct for Prohibition of Insider Trading', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/CODE OF CONDUCT FOR PROHIBITION OF INSIDER TRADING.pdf' },
    { title: 'Dividend Distribution Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Dividend-Distribution-Policy.pdf' },
    { title: 'Handbook on Investors\' Rights', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Investors’ Rights Handbook.pdf' },
    { title: 'Nomination, Remuneration and Evaluation Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Nomination and Remuneration Policy - TSL.pdf' },
    { title: 'Policy on Disclosure on Material Events', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/policy-on-disclosure-on-material-events.pdf' },
    { title: 'Policy on Prevention of Sexual harassment at Workplace', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy on Prevention of Sexual Harrassment at Workplace.pdf' },
    { title: 'Whistle Blower Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/whistle-blower-policy.pdf' },
    { title: 'Code of Conduct for Independent Directors', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Code of Conduct for Independent Directors.pdf' },
    { title: 'Authorization of KMP under Regulation 30', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Authorisation_KMP_Reg30(5)_TSL.docx' },
    { title: 'CSR Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Corporate-Social-Responsibility.pdf' },
    { title: 'Familiarisation Programme', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/FAMILIARISATION PROGRAMME FOR INDEPENDENT DIRECTORS.pdf' },
    { title: 'Details of Familiarization Programme of TSL', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/POLICY ON RELATED PARTY TRANSACTIONS.pdf' },
    // { title: 'Letter of Appointment – Independent Director', link: '' },
    { title: 'Policy for Determining Material Subsidiaries', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy on Determination of Material Subsidiary.pdf' },
    { title: 'Policy on Diversity of Board of Directors', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy on Diversity of Board.pdf' },
    // { title: 'Policy on Related Party Transaction', link: '#' },
    { title: 'Policy on Preservation of Documents and Archival of Documents', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy-on-Preservation-of-Documents-and-Archival-of-Documents.pdf' },
    { title: 'Policy for Registrars and Share Transfer Agents', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/policy-for-registrars-and-share-transfer-agents.pdf' },

    { title: 'Take Investor_Grievances_Redressal_Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Investor_Grievances_Redressal_Policy (1).pdf' },
    { title: 'Take Policy-on-Materiality-of-and-dealing-with-related-party-transactions ', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Policy-on-Materiality-of-and-dealing-with-related-party-transactions (1).pdf' },
    { title: 'Take Risk-Management-policy ', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Risk-Management-policy (1).pdf' },
    { title: 'Take Vigil-Mechanism-Policy ', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Vigil-Mechanism-Policy (1).pdf' }
    
  ];

  // Mandatory Dematerialisation Documents
  const dematDocuments = [
    { title: 'Mandatory Demat For Transfer - Second Reminder to Shareholders', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/mandatory-demat-for-transfer-second-reminder-to-shareholders.pdf' },
    { title: 'BSE Circular - Mandatory Demat For Transfer', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/BSE-circular- mandatory-demat-for-transfer.pdf' },
    { title: 'KYC letter A', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/KYC letter A.pdf' },
    { title: 'Mandatory Demat For Transfer - First Reminder to Shareholders', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/mandatory-demat-for-transfer-first-reminder-to-shareholders.pdf' },
    { title: 'NSE Circular - Mandatory Demat For Transfer', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/NSE-circular-mandatory-demat-for-transfer.pdf' },
    { title: 'SEBI Circular Notification', link: '/assets/investordata/corporate-governance/Mandatory Dematerialisation of Shares for Transfer Requests/SEBI-gazette-notification-june-8-2018.pdf' }
  ];


  // Mandatory Dematerialisation Documents
  const investorGreviance = [
    { title: 'Investor Grievance', link: '/assets/investordata/corporate-governance/investorGreviance/Investor Grievance (1).pdf' },
  ]

  const moaAndAoa = [
        { title: 'MOA & AOA', link: '/assets/investordata/corporate-governance/MOAAndAOA/MOA & AOA.pdf' },

  ]

  const getCategoryTitle = (category) => {
    const titles = {
      'Policy': 'Corporate Governance Policies',
      'Dematerialisation': 'Mandatory Dematerialisation of Shares for Transfer Requests',
      'Grievance': 'Investor Grievance',
      'MOA_AOA': 'MOA & AOA'
    };
    // Return mapped title or use the category as-is for custom sections
    return titles[category] || category;
  };

  // Get all unique categories from API data
  const allCategories = Object.keys(apiData);

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
      <h3 className="content-title">Corporate Governance</h3>

      {/* Display all categories from API */}
      {allCategories.length > 0 && allCategories.map((category) => {
        const categoryData = apiData[category].map(item => ({
          title: item.title,
          link: `${BASE_URL}${item.pdfUrl}`
        }));

        return (
          <div key={category} className="governance-policies-section">
            <h4 className="governance-section-title">{getCategoryTitle(category)}</h4>
            <div className="policies-grid">
              {categoryData.map((doc, index) => (
                <div key={index} className="policy-item">
                  <a href={doc.link} className="policy-document-link" target="_blank" rel="noopener noreferrer">
                    <span className="pdf-icon">📄</span>
                    <span className="policy-title">{doc.title}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Fallback: Corporate Governance Policies */}
      {(!allCategories.includes('Policy') && policies.length > 0) && (
        <div className="governance-policies-section">
          <h4 className="governance-section-title">Corporate Governance Policies</h4>
          <div className="policies-grid">
            {policies.map((policy, index) => (
              <div key={index} className="policy-item">
                <a href={policy.link} className="policy-document-link" target="_blank" rel="noopener noreferrer">
                  <span className="pdf-icon">📄</span>
                  <span className="policy-title">{policy.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fallback: Mandatory Dematerialisation */}
      {(!allCategories.includes('Dematerialisation') && dematDocuments.length > 0) && (
        <div className="governance-policies-section">
          <h4 className="governance-section-title">Mandatory Dematerialisation of Shares for Transfer Requests</h4>
          <div className="policies-grid">
            {dematDocuments.map((doc, index) => (
              <div key={index} className="policy-item">
                <a href={doc.link} className="policy-document-link" target="_blank" rel="noopener noreferrer">
                  <span className="pdf-icon">📄</span>
                  <span className="policy-title">{doc.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fallback: Investor Grievance */}
      {(!allCategories.includes('Grievance') && investorGreviance.length > 0) && (
        <div className="governance-policies-section">
          <h4 className="governance-section-title">Investor Greviance</h4>
          <div className="policies-grid">
            {investorGreviance.map((doc, index) => (
              <div key={index} className="policy-item">
                <a href={doc.link} className="policy-document-link" target="_blank" rel="noopener noreferrer">
                  <span className="pdf-icon">📄</span>
                  <span className="policy-title">{doc.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fallback: MOA and AOA */}
      {(!allCategories.includes('MOA_AOA') && moaAndAoa.length > 0) && (
        <div className="governance-policies-section">
          <h4 className="governance-section-title">MOA AND AOA</h4>
          <div className="policies-grid">
            {moaAndAoa.map((doc, index) => (
              <div key={index} className="policy-item">
                <a href={doc.link} className="policy-document-link" target="_blank" rel="noopener noreferrer">
                  <span className="pdf-icon">📄</span>
                  <span className="policy-title">{doc.title}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CorporateGovernance;


