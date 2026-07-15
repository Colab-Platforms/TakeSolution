import { useState } from 'react';

const AnnualReport = () => {
    const [activeSubTab, setActiveSubTab] = useState('annual-report');

    // Annual Report data
    const annualReportData = [
        { year: 'FY 2017-18', description: 'TAKE_Solutions_Annual_Report_2016-2017', link: '/assets/investordata/financial-results/FY-2017/Annual Report -2017.pdf' },
        { year: 'FY 2018-19', description: 'TAKE_Solutions_Annual_Report_2017-2018', link: '/assets/investordata/annual-report/TAKE_Solutions_Annual_Report_2017-2018.pdf' },
        { year: 'FY 2019-20', description: 'TAKE_Solutions_Annual_Report_2018-2019', link: '/assets/investordata/annual-report/TAKE_Solutions_Annual_Report_2018-2019.pdf' },
        { year: 'FY 2020-21', description: 'TAKE_Solutions_Annual_Report_2019-2020', link: '/assets/investordata/financial-results/FY-2020/TAKE_Solutions_Annual_Report_2019-2020.pdf' },
        { year: 'FY 2021-22', description: 'TAKE_Solutions_Annual_Report_2020-2021', link: '/assets/investordata/financial-results/FY-2021/TAKE_Solutions_Annual_Report_2020-2021.pdf' },
        { year: 'FY 2022-23', description: 'TAKE_Solutions_Annual_Report_2021-2022', link: '/assets/investordata/financial-results/FY-2022/TAKE_Solutions_Annual_Report_2021-2022.pdf' },
        { year: 'FY 2023-24', description: 'TAKE_Solutions_Annual_Report_2022-2023', link: '/assets/investordata/financial-results/FY-2023/TAKE_Solutions_Annual_Report_2022-2023.pdf' },
        { year: 'FY 2024-25', description: 'TAKE_Solutions_Annual_Report_2023-2024', link: '/assets/investordata/financial-results/FY-2024/TAKE_Solutions_Annual_Report_2023-2024.pdf' },
        { year: 'FY 2025-26', description: 'TAKE_Solutions_Annual_Report_2024-2025', link: '/assets/investordata/financial-results/FY-2025/TAKE_Solutions_Annual_Report_2024-2025.pdf' },
    ];

    // Annual Return data (moved from Disclosure tab)
    const annualReturnYears = [
        { year: '2024-2025', link: '/assets/investordata/disclosure/2024-25/2024-25.pdf' },
        { year: '2023-2024', link: '/assets/investordata/disclosure/2023-24/2023-2024.pdf' },
        { year: '2022-2023', link: '/assets/investordata/disclosure/2022-23/MGT_7_22-23_TSL.pdf' },
        { year: '2021-2022', link: '/assets/investordata/disclosure/2021-22/Form_MGT_7.pdf' },
        { year: '2020-2021', link: '/assets/investordata/disclosure/2020-21/MGT_7_2020-21_TSL_Signed.pdf' },
        { year: '2019-2020', link: '/assets/investordata/disclosure/2019-20/Form_MGT-7_2019-20_TSL_Signed.pdf' },
        { year: '2018-2019', link: '/assets/investordata/disclosure/annual_return-2018-19.pdf' },
    ];

    return (
        <div className="tab-content active">
            {/* Sub-tab Navigation */}
            <div className="sub-tab-nav">
                <button
                    id="subtab-annual-report"
                    className={`sub-tab-btn ${activeSubTab === 'annual-report' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('annual-report')}
                >
                    Annual Report
                </button>
                <button
                    id="subtab-annual-return"
                    className={`sub-tab-btn ${activeSubTab === 'annual-return' ? 'active' : ''}`}
                    onClick={() => setActiveSubTab('annual-return')}
                >
                    Annual Return
                </button>
            </div>

            {/* Annual Report Sub-tab Content */}
            {activeSubTab === 'annual-report' && (
                <div className="disclosure-table-wrapper">
                    <table className="disclosure-table">
                        <thead>
                            <tr>
                                <th>Financial Year</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {annualReportData.map((item, index) => (
                                <tr key={index}>
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
            )}

            {/* Annual Return Sub-tab Content */}
            {activeSubTab === 'annual-return' && (
                <div className="annual-return-section">
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
            )}
        </div>
    );
};

export default AnnualReport;
