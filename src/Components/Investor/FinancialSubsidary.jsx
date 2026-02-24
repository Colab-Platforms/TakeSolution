import React from 'react'

const FinancialSubsidary = () => {

  const financialResultData = [
        { type: 'Other Disclosures', year: 'FY-2017', description: 'subsidiary-company-financials_fy-2016-17', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2016-17.pdf' },
        { type: 'Other Disclosures', year: 'FY-2018', description: 'subsidiary-company-financials_fy-2017-18', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2017-18.pdf' },
        { type: 'Other Disclosures', year: 'FY-2019', description: 'subsidiary-company-financials_fy-2018-19', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2018-19.pdf' },
        { type: 'Other Disclosures', year: 'FY-2020', description: 'subsidiary-company-financials_fy-2019-20', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2019-20.pdf' },
        { type: 'Other Disclosures', year: 'FY-2021', description: 'subsidiary-company-financials_fy-2020-21', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2020-21.pdf' },
        { type: 'Other Disclosures', year: 'FY-2022', description: 'subsidiary-company-financials_fy-2021-22', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2021-22.pdf' },
        { type: 'Other Disclosures', year: 'FY-2023', description: 'subsidiary-company-financials_fy-2022-23', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2022-23.pdf' },
        { type: 'Other Disclosures', year: 'FY-2024', description: 'subsidiary-company-financials_fy-2023-24', link: '/assets/investordata/Subsidiary Fianacials/subsidiary-company-financials_fy-2023-24.pdf' }
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
}

export default FinancialSubsidary


