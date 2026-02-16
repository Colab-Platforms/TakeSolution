import React from 'react';

const CorporateGovernance = () => {
  // Corporate Governance Policies
  const policies = [
    { title: 'Code of Conduct for Directors & Senior Management Personnel', link: '#' },
    { title: 'Code of Conduct for Prohibition of Insider Trading', link: '#' },
    { title: 'Dividend Distribution Policy', link: '#' },
    { title: 'Handbook on Investors\' Rights', link: '#' },
    { title: 'Nomination, Remuneration and Evaluation Policy', link: '#' },
    { title: 'Policy on Disclosure on Material Events', link: '#' },
    { title: 'Policy on Prevention of Sexual harassment at Workplace', link: '#' },
    { title: 'Whistle Blower Policy', link: '#' },
    { title: 'Code of Conduct for Independent Directors', link: '#' },
    { title: 'Authorization of KMP under Regulation 30', link: '#' },
    { title: 'CSR Policy', link: '#' },
    { title: 'Familiarisation Programme', link: '#' },
    { title: 'Details of Familiarization Programme of TSL', link: '#' },
    { title: 'Letter of Appointment – Independent Director', link: '#' },
    { title: 'Policy for Determining Material Subsidiaries', link: '#' },
    { title: 'Policy on Diversity of Board of Directors', link: '#' },
    { title: 'Policy on Related Party Transaction', link: '#' },
    { title: 'Policy on Preservation of Documents and Archival of Documents', link: '#' },
    { title: 'Policy for Registrars and Share Transfer Agents', link: '#' }
  ];

  // Mandatory Dematerialisation Documents
  const dematDocuments = [
    { title: 'Mandatory Demat For Transfer - Second Reminder to Shareholders', link: '#' },
    { title: 'BSE Circular - Mandatory Demat For Transfer', link: '#' },
    { title: 'Mandatory Demat For Transfer - Communication to Shareholders', link: '#' },
    { title: 'Mandatory Demat For Transfer - First Reminder to Shareholders', link: '#' },
    { title: 'NSE Circular - Mandatory Demat For Transfer', link: '#' },
    { title: 'SEBI Circular Notification', link: '#' }
  ];

  return (
    <div className="tab-content active">
      <h3 className="content-title">Corporate Governance</h3>

      {/* Corporate Governance Policies */}
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

      {/* Mandatory Dematerialisation */}
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
    </div>
  );
};

export default CorporateGovernance;
