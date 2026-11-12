import React from 'react';

const CorporateGovernance = () => {
  // Corporate Governance Policies
  const policies = [
    { title: 'Policy on Criteria for making payments to Non-Executive Independent Directors', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794475855/Policy_on_Criteria_for_making_payments_to_Non-Executive_Independent_Directors_ad4jnq.pdf' },
    { title: 'Take Policy on Appointment and Remuneration of Directors Key Managerial Personnel', link: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Take_Policy_on_Appointment_and_Remuneration_of_Directors_Key_Managerial_Personnel.pdf?v=1776419616' },
    { title: 'Take Policy terms and conditions of appointment of Independent Directors', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794474852/Take_Policy-terms_and_conditions_of_appointment_of_Independent_Directors_sxnzrb.pdf' },
    // { title: 'Take Policy terms and conditions of appointment of Independent Directors', link: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Take_Policy-terms_and_conditions_of_appointment_of_Independent_Directors.pdf?v=1776417044' },
    { title: 'Code of Conduct for Directors and Senior Management Personnel', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794484978/Code_of_Conduct_for_Directors_and_Senior_Management_Personnel_1_z2yoy9.pdf' },
    { title: 'Code of Conduct for Prohibition of Insider Trading', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794484894/CODE_OF_CONDUCT_FOR_PROHIBITION_OF_INSIDER_TRADING_vadxdm.pdf' },
    { title: 'Dividend Distribution Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Dividend-Distribution-Policy.pdf' },
    { title: 'Handbook on Investors\' Rights', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Investors’ Rights Handbook.pdf' },
    { title: 'Nomination, Remuneration and Evaluation Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Nomination and Remuneration Policy - TSL.pdf' },
    { title: 'Policy on Disclosure on Material Events', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/policy-on-disclosure-on-material-events.pdf' },
    { title: 'Policy on Prevention of Sexual harassment at Workplace', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy on Prevention of Sexual Harrassment at Workplace.pdf' },
    { title: 'Take vigil mechanism Whistle Blower policy', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794475395/Take_vigil_mechanism_Whistle_Blower_policy_yuaqql.pdf' },
    { title: 'TAKE Code of Conduct for Independent Directors', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794484685/TAKE_Code_of_Conduct_for_Independent_Directors_vonllc.pdf' },
    { title: 'Authorization of KMP under Regulation 30', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Authorisation_KMP_Reg30(5)_TSL.docx' },
    { title: 'CSR Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Corporate-Social-Responsibility.pdf' },
    { title: 'Take Policy familiarisation-programme', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794476573/Take_Policy_familiarisation-programme_aemazp.pdf' },
    // { title: 'Details of Familiarization Programme of TSL', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/POLICY ON RELATED PARTY TRANSACTIONS.pdf' },
    // { title: 'Details of Familiarization Programme of TSL', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/POLICY ON RELATED PARTY TRANSACTIONS.pdf' },
    // { title: 'Letter of Appointment – Independent Director', link: '' },
    { title: 'Policy on Determination of Material Subsidiary', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794476102/Policy_on_Determination_of_Material_Subsidiary_e9osgw.pdf' },
    { title: 'Policy on Diversity of Board of Directors', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy on Diversity of Board.pdf' },
    // { title: 'Policy on Related Party Transaction', link: '#' },
    { title: 'Policy on Preservation of Documents and Archival of Documents', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Policy-on-Preservation-of-Documents-and-Archival-of-Documents.pdf' },
    { title: 'Policy for Registrars and Share Transfer Agents', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/policy-for-registrars-and-share-transfer-agents.pdf' },

    { title: 'Take Investor_Grievances_Redressal_Policy', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Investor_Grievances_Redressal_Policy (1).pdf' },
    { title: 'Take Policy on Materiality of and dealing with related party transactions', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794478345/Take_Policy-on-Materiality-of-and-dealing-with-related-party-transactions_woy1ba.pdf' },
    { title: 'Take Risk-Management-policy ', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Risk-Management-policy (1).pdf' },
    // { title: 'Take Vigil-Mechanism-Policy ', link: '/assets/investordata/corporate-governance/Corporate-governance-policies/Take Vigil-Mechanism-Policy (1).pdf' }
    
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
    { title: 'Investor Grievance', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794476766/Investor_Grievance_aeb7jz.pdf' },
  ]

  const moaAndAoa = [
        { title: 'MOA & AOA', link: '/assets/investordata/corporate-governance/MOAAndAOA/MOA & AOA.pdf' },

  ]
  // const annualSecretarialComplianceReport = [
  //       { title: 'Annual Secretarial Compliance Report', link: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Annual_Secretarial_Complaince_Report_31_March_2025.pdf?v=1776418054' },

  // ]
  const kmpDeterminingAuthority = [
        { title: 'KMP authorised for the purpose of determining materiality', link: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/KMP_authorised_for_the_purpose_of_determining_materiality.pdf?v=1776420396' },

  ]
  const DetailsofKeyManagerialPersonnelandComplianceOfficer = [
        { title: 'Disclosure of contact details of key managerial personnels', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1794477848/Disclosure_of_contact_details_of_key_managerial_personnels_ln70vh.pdf' },

  ]

  

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

      {/* Mandatory Dematerialisation */}
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


      {/* MOA and AOA */}
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


      {/* Annual Secretarial Compliance Report */}
      {/* <div className="governance-policies-section">
        <h4 className="governance-section-title">Annual Secretarial Compliance Report</h4>
        <div className="policies-grid">
          {annualSecretarialComplianceReport.map((doc, index) => (
            <div key={index} className="policy-item">
              <a href={doc.link} className="policy-document-link" target="_blank" rel="noopener noreferrer">
                <span className="pdf-icon">📄</span>
                <span className="policy-title">{doc.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div> */}


      {/* KMP authorised for the purpose of determining materiality */}
      <div className="governance-policies-section">
        <h4 className="governance-section-title">KMP authorised for the purpose of determining materiality</h4>
        <div className="policies-grid">
          {kmpDeterminingAuthority.map((doc, index) => (
            <div key={index} className="policy-item">
              <a href={doc.link} className="policy-document-link" target="_blank" rel="noopener noreferrer">
                <span className="pdf-icon">📄</span>
                <span className="policy-title">{doc.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Details of Key Managerial Personnel and Compliance Officer */}
      <div className="governance-policies-section">
        <h4 className="governance-section-title">Details of Key Managerial Personnel and Compliance Officer</h4>
        <div className="policies-grid">
          {DetailsofKeyManagerialPersonnelandComplianceOfficer.map((doc, index) => (
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


