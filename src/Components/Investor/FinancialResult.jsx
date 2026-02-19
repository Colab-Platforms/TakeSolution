import { useState } from 'react';

const FinancialResult = () => {
  const [selectedYear, setSelectedYear] = useState('FY26');

  const years = ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16', 'FY15', 'FY14', 'FY13', 'FY12'];

  const financialResultData = {
    FY26: [
      // { type: 'Other Disclosures', year: 'FY-2017', quarter: 'Q1', description: '', link: '' },
      // { type: 'Other Disclosures', year: 'FY-2017', quarter: 'Q2', description: '', link: '' },
      // { type: 'Other Disclosures', year: 'FY-2017', quarter: 'Q3', description: '', link: '' },
      // { type: 'Other Disclosures', year: 'FY-2017', quarter: 'Q4', description: '', link: '' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q1', description: 'take-sebi-qtr_1_transcript-2017-18', link: '/assets/investordata/financial-results/take-sebi-qtr_1_transcript-2017-18.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q1', description: 'Consolidated Standealone financial results', link: '/assets/investordata/financial-results/Consolidated Standealone financial results.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q1', description: 'Consolidated Financial Results', link: '/assets/investordata/financial-results/Consolidated Financial Results.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q1', description: 'Quarter ended June 30, 2017 Earnings Release', link: '/assets/investordata/financial-results/Quarter ended June 30, 2017 Earnings Release.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q2', description: 'TF', link: '/assets/investordata/financial-results/TF.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q2', description: 'standalone financial results', link: '/assets/investordata/financial-results/standalone financial results.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q2', description: 'Consolidated financial results', link: '/assets/investordata/financial-results/Consolidated Financial Results.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q2', description: 'Quarter ended September 30, 2017 Earnings Release', link: '/assets/investordata/financial-results/Quarter ended September 30, 2017 Earnings Release.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'take-sebi-qtr_3_transcript-2017-18', link: '/assets/investordata/financial-results/FY-2018/Q3/take-sebi-qtr_3_transcript-2017-18.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'Standalone', link: '/assets/investordata/financial-results/FY-2018/Q3/Standalone.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'Consolidated FS', link: '/assets/investordata/financial-results/FY-2018/Q3/Consolidated FS.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'Quarter ended December 31, 2017 Earnings Release', link: '/assets/investordata/financial-results/FY-2018/Q3/Quarter ended December 31, 2017 Earnings Release.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q4', description: 'take-sebi-qtr_4_transcript-2017-18', link: '/assets/investordata/financial-results/FY-2018/Q4/take-sebi-qtr_4_transcript-2017-18.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q4', description: 'take-sebi-qtr_4_stand_alone-2017-18', link: '/assets/investordata/financial-results/FY-2018/Q4/take-sebi-qtr_4_stand_alone-2017-18.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q4', description: 'take-sebi-qtr_4_consolidated-2017-18', link: '/assets/investordata/financial-results/FY-2018/Q4/take-sebi-qtr_4_consolidated-2017-18.pdf' },
      { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q4', description: 'Earnings Release', link: '/assets/investordata/financial-results/FY-2018/Q4/Earnings Release.pdf' },


      // { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'Quarter ended December 31, 2017 Earnings Release', link: '/assets/investordata/financial-results/FY-2018/Q3/Quarter ended December 31, 2017 Earnings Release.pdf' },
      // { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'Quarter ended December 31, 2017 Earnings Release', link: '/assets/investordata/financial-results/FY-2018/Q3/Quarter ended December 31, 2017 Earnings Release.pdf' },
      // { type: 'Other Disclosures', year: 'FY-2018', quarter: 'Q3', description: 'Quarter ended December 31, 2017 Earnings Release', link: '/assets/investordata/financial-results/FY-2018/Q3/Quarter ended December 31, 2017 Earnings Release.pdf' },

      
    ],
    FY25: [
      // { type: 'Quarterly Disclosures', year: 'FY-2017', description: 'Reconciliation of Share Capital Audit Report - Quarter ended June 3, 2025', link: '#' },
      // { type: 'Other Disclosures', date: '30-Jul-25', description: 'Summary of proceedings of the Extra Ordinary General Meeting', link: '#' },
      // { type: 'Other Disclosures', date: '21-Jul-25', description: 'Newspaper Publication', link: '#' },
      // { type: 'Other Disclosures', date: '14-Jul-25', description: 'Certificate pursuant to Regulation 74(5) of SEBI (Depositories and Participants) Regulations 2018', link: '#' },
      // { type: 'Other Disclosures', date: '09-Jul-25', description: 'Newspaper Publication', link: '#' },
      // { type: 'Other Disclosures', date: '08-Jul-25', description: 'Notice of Extra Ordinary General Meeting', link: '#' },
      // { type: 'Other Disclosures', date: '08-Jul-25', description: 'Newspaper Publication', link: '#' },
      // { type: 'Other Disclosures', date: '07-Jul-25', description: 'Outcome of the Board Meeting held on Monday, July 7, 2025', link: '#' },
      // { type: 'Other Disclosures', date: '02-Jul-25', description: 'Notice of Board Meeting', link: '#' },
      // { type: 'Other Disclosures', date: '27-Jun-25', description: 'Closure of trading window', link: '#' },
      // { type: 'Other Disclosures', date: '02-Jun-25', description: 'Newspaper Publication', link: '#' },
      // { type: 'Other Disclosures', date: '30-May-25', description: 'Annual Secretarial Compliance Report of the Company for the year ended March 31, 2025', link: '#' },
      // { type: 'Other Disclosures', date: '30-May-25', description: 'Outcome of the Board Meeting held on Friday, May 30, 2025', link: '#' }
    ]
  };

  const currentYearFinancialData = financialResultData[selectedYear];

  return (
    <div className="tab-content active">
      {/* <h3 className="content-title">Quarter - 3</h3> */}

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
              {/* <th>Type</th> */}
              <th>Year</th>
              <th>Quarter</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {currentYearFinancialData?.map((item, index) => (
              <tr key={index}>
                {/* <td>{item.type}</td> */}
                <td>{item?.year}</td>
                <td>{item?.quarter}</td>
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
};

export default FinancialResult;
