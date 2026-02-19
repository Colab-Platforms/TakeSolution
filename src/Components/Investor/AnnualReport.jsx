import { useState } from 'react';

const AnnualReport = () => {
    // const [selectedYear, setSelectedYear] = useState('FY25');

    // const years = ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16', 'FY15', 'FY14', 'FY13', 'FY12'];

    // Aap yahan apna data add kar sakte hain
    const financialResultData = [
        { type: 'Other Disclosures', year: 'FY-2017', description: 'Annual Report-2017', link: '/assets/investordata/financial-results/FY-2017/Annual Report -2017.pdf' },
        { type: 'Other Disclosures', year: 'FY-2020', description: 'TAKE_Solutions_Annual_Report_2019-2020', link: '/assets/investordata/financial-results/FY-2020/TAKE_Solutions_Annual_Report_2019-2020.pdf' },
        { type: 'Other Disclosures', year: 'FY-2021', description: 'TAKE_Solutions_Annual_Report_2020-2021', link: '/assets/investordata/financial-results/FY-2021/TAKE_Solutions_Annual_Report_2020-2021.pdf' },
        { type: 'Other Disclosures', year: 'FY-2022', description: 'TAKE_Solutions_Annual_Report_2021-2022', link: '/assets/investordata/financial-results/FY-2022/TAKE_Solutions_Annual_Report_2021-2022.pdf' },
        { type: 'Other Disclosures', year: 'FY-2023', description: 'TAKE_Solutions_Annual_Report_2022-2023', link: '/assets/investordata/financial-results/FY-2023/TAKE_Solutions_Annual_Report_2022-2023.pdf' },
        { type: 'Other Disclosures', year: 'FY-2024', description: 'TAKE_Solutions_Annual_Report_2023-2024', link: '/assets/investordata/financial-results/FY-2024/TAKE_Solutions_Annual_Report_2023-2024.pdf' },
        { type: 'Other Disclosures', year: 'FY-2025', description: 'TAKE_Solutions_Annual_Report_2024-2025', link: '/assets/investordata/financial-results/FY-2025/TAKE_Solutions_Annual_Report_2024-2025.pdf' }
    ]

    // const currentYearData = reportsData[selectedYear] || reportsData['FY25'];

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
                        {financialResultData?.map((item, index) => (
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

export default AnnualReport;
