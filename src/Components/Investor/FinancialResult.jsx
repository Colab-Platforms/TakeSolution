import { useState } from 'react';

const FinancialResult = () => {
  // const [selectedYear, setSelectedYear] = useState('FY25');

  // const years = ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16', 'FY15', 'FY14', 'FY13', 'FY12'];

  // Aap yahan apna data add kar sakte hain
  const financialResultData = [
    // { type: 'Other Disclosures', date: '13-Feb-26', description: 'Consideration and Approval of Unaudited Financial Results as on 31•1 December 2025.', link: '/assets/investordata/financial-results/FINAL_UFR.pdf' },
    //   { type: 'Other Disclosures', date: '02-Sep-20', description: 'Un-Audited Financial Result quarter ending 30th June, 2020 pursuant to Regulation 33 of the SEBI (LODR) Regulations, 2015.', link: '/assets/investordata/financial-results/1.-Financial-Results-30.06.2020.pdf' },
    //   { type: 'Other Disclosures', date: '29-Jan-21', description: 'Unaudited Financial Result for quarter ending 31st December 2020 pursuant to Regulation 33 of the SEBI (lODR) Regulations, 2015.', link: '/assets/investordata/financial-results/3.-Financial-Results-31.12.2020.pdf'},
    //   { type: 'Other Disclosures', date: '09-Nov-20', description: 'Un-Audited Financial Result quarter and half year ended on 30th September 2020 pursuant to Regulation 33 of the SEBI (LODR) Regulations, 2015.', link: '/assets/investordata/financial-results/2.-Financial-Results-30.09.2020.pdf'},
    //   { type: 'Other Disclosures', date: '02-Nov-21', description: 'Un-Audited Financial Result quarter and half year ended on 30th September 2021 pursuant to Regulation 33 of the SEBI (LODR) Regulations, 2015.', link: '/assets/investordata/financial-results/2.-Financial-Results-30.09.2021.pdf'},
    //   { type: 'Other Disclosures', date: '10-Jun-21', description: 'Outcome ofthe Board Meeting ofthe board held on 10th June 2021.', link: '/assets/investordata/financial-results/4.-Financial-Results-31.03.2021.pdf' },
    //   { type: 'Other Disclosures', date: '01-Feb-22', description: 'Unaudited Financial Result for quarter ending 31st December 2021 pursuant to Regulation 33 of the SEBI (lODR) Regulations, 2015.', link: '/assets/investordata/financial-results/3.-Financial-Results-31.12.2021.pdf'},
    //   { type: 'Other Disclosures', date: '09-Aug-21', description: 'Un-Audited Financial Result quarter ending 30th June, 2021 pursuant to Regulation 33 of the SEBI (LODR) Regulations, 2015.', link: '/assets/investordata/financial-results/1.-Financial-Results-30.06.2021.pdf'},
    //   { type: 'Other Disclosures', date: '23-May-22', description: 'Outcome of the Board Meeting held for consideration and approval of Audited Financial Results as on 31 sl March 2022.', link: '/assets/investordata/financial-results/4.-Financial-Results-31.03.2022.pdf' },
    //   { type: 'Other Disclosures', date: '09-Nov-22', description: 'Submission of Un-audited Financial Results for the second quarter and half year ended on 30th September 2022.', link: '/assets/investordata/financial-results/2.-Financial-Result-30.09.2022-1.pdf' },

      // { type: 'Other Disclosures', date: '27-Oct-25', description: 'Outcome of the Board Meeting held on Monday, October 27, 2025', link: '/public/assets/investordata/disclosure/disclosure-data/Reg30_Outcome_BM_27102025_TSL.pdf' },
      
      // { type: 'Other Disclosures', date: '22-Oct-25', description: 'Notice of Board Meeting', link: '/public/assets/investordata/disclosure/disclosure-data/Reg29_Intimation_BM_22102025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '10-Oct-25', description: 'Certificate pursuant to Regulation 74(5) of SEBI (Depositories and Participants) Regulations 2018', link: '/public/assets/investordata/disclosure/disclosure-data/Reg74(5)_10102025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '09-Oct-25', description: 'Intimation regarding resignation of Statutory Auditor of the Company', link: '/public/assets/investordata/disclosure/disclosure-data/INTIMATION_REG_30_AUDITOR_RESIGNATION_TSL.pdf' },
      // { type: 'Other Disclosures', date: '03-Oct-25', description: 'Scrutinizer’s Report and Voting Results of the Twenty Fourth Annual General Meeting', link: '/public/assets/investordata/disclosure/disclosure-data/Scrutinizer_Report_AGM_30092025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '30-Sep-25', description: 'Summary of proceedings of the Twenty Fourth Annual General Meeting', link: '/public/assets/investordata/disclosure/disclosure-data/AGM_Proceedings_2025.pdf'},
      // { type: 'Other Disclosures', date: '30-Sep-25', description: 'Closure of Trading Window', link: '/public/assets/investordata/disclosure/disclosure-data/TradingWindowClosure_30092025.pdf' },
      // { type: 'Other Disclosures', date: '26-Sep-25', description: 'Intimation for disinvestment of M/s. Take Consultancy Services Inc, wholly owned subsidiary', link: '/public/assets/investordata/disclosure/disclosure-data/Reg30_Disinvestment_TCS-Inc_260925.pdf' },
      // { type: 'Other Disclosures', date: '17-Sep-25', description: 'Newspaper Publication', link: '/public/assets/investordata/disclosure/disclosure-data/Reg47_Intimation_Newspaper_TSL_170925.pdf' },
      // { type: 'Other Disclosures', date: '08-Sep-25', description: 'Newspaper Publication', link: '/public/assets/investordata/disclosure/disclosure-data/NewspaperIntimation_08092025.pdf' },
      // { type: 'Annual Disclosures', date: '06-Sep-25', description: 'Submission of Annual Report - FY 2024-25', link: '/public/assets/investordata/disclosure/disclosure-data/AR_Submission_06092025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '01-Aug-25', description: 'Scrutinizer\'s Report and Voting Results of the Extra Ordinary General Meeting', link: '/public/assets/investordata/disclosure/disclosure-data/ScrutinizerReport_EGM_01082025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '30-Jul-25', description: 'Reconciliation of Share Capital Audit Report - Quarter ended June 3, 2025.', link: '/public/assets/investordata/disclosure/disclosure-data/Reg76_30062025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '30-Jul-25', description: 'Summary of proceedings of the Extra-Ordinary General Meeting', link: '/public/assets/investordata/disclosure/disclosure-data/EGM_Proceedings_2025.pdf' },
      // { type: 'Other Disclosures', date: '21-Jul-25', description: 'Newspaper Publication', link: '/public/assets/investordata/disclosure/disclosure-data/Reg47_Intimation_Newspaper_TSL.pdf' },
      // { type: 'Other Disclosures', date: '14-Jul-25', description: 'Certificate pursuant to Regulation 74(5) of SEBI (Depositories and Participants) Regulations 2018.', link: '/public/assets/investordata/disclosure/disclosure-data/Reg74(5)_14072025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '09-Jul-25', description: 'Newspaper Publication', link: '#' },
      // { type: 'Other Disclosures', date: '08-Jul-25', description: 'Notice of Extra-Ordinary General Meeting', link: '/public/assets/investordata/disclosure/disclosure-data/Intimation_EGM_Notice_TSL.pdf' },
      // { type: 'Other Disclosures', date: '08-Jul-25', description: 'Newspaper Publication', link: '/public/assets/investordata/disclosure/disclosure-data/NewspaperIntimation-08-jul-25.pdf' },
      // { type: 'Other Disclosures', date: '07-Jul-25', description: 'Outcome of the Board Meeting held on Monday, July 7, 2025.', link: '/public/assets/investordata/disclosure/disclosure-data/Reg30_Outcome_BM_07072025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '02-Jul-25', description: 'Notice of Board Meeting', link: '/public/assets/investordata/disclosure/disclosure-data/Reg 29_Intimation_BM_02072025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '27-Jun-25', description: 'Closure of trading window', link: '/public/assets/investordata/disclosure/disclosure-data/TradingWindowClosure_30062025.pdf' },
      // { type: 'Other Disclosures', date: '02-Jun-25', description: 'Newspaper Publication', link: '/public/assets/investordata/disclosure/disclosure-data/NewspaperIntimation-02-06-2025.pdf' },
      // { type: 'Other Disclosures', date: '30-May-25', description: 'Annual Secretarial Compliance Report of the Company for the year ended March 31, 2025', link: '/public/assets/investordata/disclosure/disclosure-data/Reg24A_ASCR_30052025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '30-May-25', description: 'Outcome of the Board Meeting held on Friday, May 30, 2025.', link: '/public/assets/investordata/disclosure/disclosure-data/ScrutinizerReport_EGM_01082025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '24-May-25', description: 'Intimation under Regulation 30 of the SEBI (Listing Obligations and Disclosure Requirement) Regulations, 2015 – Appointment of Independent Directors', link: '/public/assets/investordata/disclosure/disclosure-data/ScrutinizerReport_EGM_01082025_TSL.pdf' },
      // { type: 'Other Disclosures', date: '23-May-25', description: 'Notice of Board Meeting', link: '/public/assets/investordata/disclosure/disclosure-data/ScrutinizerReport_EGM_01082025_TSL.pdf' },
  ]

  // const currentYearData = reportsData[selectedYear] || reportsData['FY25'];

  return (
    <div className="tab-content active">
      <h3 className="content-title">Quarter - 3</h3>

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
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {financialResultData?.map((item, index) => (
              <tr key={index}>
                {/* <td>{item.type}</td> */}
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
