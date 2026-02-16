import { useState } from 'react';

const Disclosure = () => {
  const [selectedYear, setSelectedYear] = useState('FY26');

  const years = ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17'];

  // Disclosure data for each year
  const disclosureData = {
    FY26: [
      { type: 'Other Disclosures', date: '23-Dec-25', description: 'Press Release - TAKE Solutions Outlines a Strategic Plan to Build an Advanced AI-Driven Diagnostic & Preventive Care Platform as Part of Its Long-Term Value Creation Roadmap.', link: '#' },
      { type: 'Other Disclosures', date: '30-Oct-25', description: 'Reconciliation of Share Capital Audit Report – Quarter ended September 30, 2025', link: '#' },
      { type: 'Other Disclosures', date: '28-Oct-25', description: 'Newspaper Publication', link: '#' },
      { type: 'Other Disclosures', date: '27-Oct-25', description: 'Outcome of the Board Meeting held on Monday, October 27, 2025', link: '#' },
      { type: 'Other Disclosures', date: '22-Oct-25', description: 'Notice of Board Meeting', link: '#' },
      { type: 'Other Disclosures', date: '10-Oct-25', description: 'Certificate pursuant to Regulation 74(5) of SEBI (Depositories and Participants) Regulations 2018', link: '#' },
      { type: 'Other Disclosures', date: '09-Oct-25', description: 'Intimation regarding resignation of Statutory Auditor of the Company', link: '#' },
      { type: 'Other Disclosures', date: '03-Oct-25', description: 'Scrutinizer\'s Report and Voting Results of the Twenty Fourth Annual General Meeting', link: '#' },
      { type: 'Other Disclosures', date: '30-Sep-25', description: 'Summary of proceedings of the Twenty Fourth Annual General Meeting', link: '#' },
      { type: 'Other Disclosures', date: '30-Sep-25', description: 'Closure of Trading Window', link: '#' },
      { type: 'Other Disclosures', date: '26-Sep-25', description: 'Intimation for disinvestment of M/s. Take Consultancy Services Inc, wholly owned subsidiary', link: '#' },
      { type: 'Other Disclosures', date: '17-Sep-25', description: 'Newspaper Publication', link: '#' },
      { type: 'Other Disclosures', date: '08-Sep-25', description: 'Newspaper Publication', link: '#' },
      { type: 'Annual Disclosures', date: '06-Sep-25', description: 'Submission of Annual Report - FY 2024-25', link: '#' },
      { type: 'Other Disclosures', date: '01-Aug-25', description: 'Scrutinizer\'s Report and Voting Results of the Extra Ordinary General Meeting', link: '#' }
    ],
    FY25: [
      { type: 'Quarterly Disclosures', date: '30-Jul-25', description: 'Reconciliation of Share Capital Audit Report - Quarter ended June 3, 2025', link: '#' },
      { type: 'Other Disclosures', date: '30-Jul-25', description: 'Summary of proceedings of the Extra Ordinary General Meeting', link: '#' },
      { type: 'Other Disclosures', date: '21-Jul-25', description: 'Newspaper Publication', link: '#' },
      { type: 'Other Disclosures', date: '14-Jul-25', description: 'Certificate pursuant to Regulation 74(5) of SEBI (Depositories and Participants) Regulations 2018', link: '#' },
      { type: 'Other Disclosures', date: '09-Jul-25', description: 'Newspaper Publication', link: '#' },
      { type: 'Other Disclosures', date: '08-Jul-25', description: 'Notice of Extra Ordinary General Meeting', link: '#' },
      { type: 'Other Disclosures', date: '08-Jul-25', description: 'Newspaper Publication', link: '#' },
      { type: 'Other Disclosures', date: '07-Jul-25', description: 'Outcome of the Board Meeting held on Monday, July 7, 2025', link: '#' },
      { type: 'Other Disclosures', date: '02-Jul-25', description: 'Notice of Board Meeting', link: '#' },
      { type: 'Other Disclosures', date: '27-Jun-25', description: 'Closure of trading window', link: '#' },
      { type: 'Other Disclosures', date: '02-Jun-25', description: 'Newspaper Publication', link: '#' },
      { type: 'Other Disclosures', date: '30-May-25', description: 'Annual Secretarial Compliance Report of the Company for the year ended March 31, 2025', link: '#' },
      { type: 'Other Disclosures', date: '30-May-25', description: 'Outcome of the Board Meeting held on Friday, May 30, 2025', link: '#' }
    ]
  };

  // Annual Return data
  const annualReturnYears = [
    { year: '2023-2024', link: '' },
    { year: '2022-2023', link: '' },
    { year: '2021-2022', link: '' },
    { year: '2020-2021', link: '' },
    { year: '2019-2020', link: '' },
    { year: '2018-2019', link: '/public/assets/investordata/disclosure/annual_return-2018-19.pdf' }
  ];

  const currentDisclosures = disclosureData[selectedYear] || [];

  return (
    <div className="tab-content active">
      <h3 className="content-title">Disclosure</h3>

      {/* Year Tabs */}
      <div className="disclosure-year-tabs">
        {years.map((year) => (
          <button
            key={year}
            className={`disclosure-year-btn ${selectedYear === year ? 'active' : ''}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Disclosure Table */}
      <div className="disclosure-table-wrapper">
        <table className="disclosure-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {currentDisclosures.map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td>
                  <a href={item.link} className="disclosure-description-link" target="_blank" rel="noopener noreferrer">
                    <span className="pdf-icon-small">📄</span>
                    {item.description}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Annual Return Section */}
      <div className="annual-return-section">
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
      </div>
    </div>
  );
};

export default Disclosure;
