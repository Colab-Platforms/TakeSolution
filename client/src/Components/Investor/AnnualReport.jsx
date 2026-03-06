import { useState, useEffect } from 'react';
import { annualReportAPI } from '../../services/api';

const AnnualReport = () => {
    const [loading, setLoading] = useState(false);
    const [financialResultData, setFinancialResultData] = useState([]);

    useEffect(() => {
        fetchAnnualReports();
    }, []);

    const fetchAnnualReports = async () => {
        setLoading(true);
        try {
            const response = await annualReportAPI.getAll();
            if (response.data.success) {
                setFinancialResultData(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching annual reports:', error);
            // Fallback to hardcoded data
            setFinancialResultData(hardcodedFinancialResultData);
        } finally {
            setLoading(false);
        }
    };

    // Hardcoded data as fallback
    const hardcodedFinancialResultData = [
        { type: 'Other Disclosures', year: 'FY-2017', description: 'TAKE_Solutions_Annual_Report_2016-2017', link: '/assets/investordata/financial-results/FY-2017/Annual Report -2017.pdf' },
        { type: 'Other Disclosures', year: 'FY-2018', description: 'TAKE_Solutions_Annual_Report_2017-2018', link: '/assets/investordata/annual-report/TAKE_Solutions_Annual_Report_2017-2018.pdf' },
        { type: 'Other Disclosures', year: 'FY-2019', description: 'TAKE_Solutions_Annual_Report_2018-2019', link: '/assets/investordata/annual-report/TAKE_Solutions_Annual_Report_2018-2019.pdf' },
        { type: 'Other Disclosures', year: 'FY-2020', description: 'TAKE_Solutions_Annual_Report_2019-2020', link: '/assets/investordata/financial-results/FY-2020/TAKE_Solutions_Annual_Report_2019-2020.pdf' },
        { type: 'Other Disclosures', year: 'FY-2021', description: 'TAKE_Solutions_Annual_Report_2020-2021', link: '/assets/investordata/financial-results/FY-2021/TAKE_Solutions_Annual_Report_2020-2021.pdf' },
        { type: 'Other Disclosures', year: 'FY-2022', description: 'TAKE_Solutions_Annual_Report_2021-2022', link: '/assets/investordata/financial-results/FY-2022/TAKE_Solutions_Annual_Report_2021-2022.pdf' },
        { type: 'Other Disclosures', year: 'FY-2023', description: 'TAKE_Solutions_Annual_Report_2022-2023', link: '/assets/investordata/financial-results/FY-2023/TAKE_Solutions_Annual_Report_2022-2023.pdf' },
        { type: 'Other Disclosures', year: 'FY-2024', description: 'TAKE_Solutions_Annual_Report_2023-2024', link: '/assets/investordata/financial-results/FY-2024/TAKE_Solutions_Annual_Report_2023-2024.pdf' },
        { type: 'Other Disclosures', year: 'FY-2025', description: 'TAKE_Solutions_Annual_Report_2024-2025', link: '/assets/investordata/financial-results/FY-2025/TAKE_Solutions_Annual_Report_2024-2025.pdf' }
    ];

    const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

    return (
        <div className="tab-content active">
            {/* Loading State */}
            {loading && (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            {/* Disclosure Table */}
            {!loading && (
                <div className="disclosure-table-wrapper">
                    <table className="disclosure-table">
                        <thead>
                            <tr>
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
                                    <tr key={item._id || index}>
                                        <td>{item.year}</td>
                                        <td>
                                            <a 
                                                href={item.pdfUrl ? `${BASE_URL}${item.pdfUrl}` : item.link} 
                                                className="disclosure-description-link" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
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
            )}

            </div>
        
    );
};

export default AnnualReport;


