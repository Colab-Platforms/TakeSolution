import { useState } from 'react';

const CorporateAnnouncement = () => {
    const [selectedYear, setSelectedYear] = useState('FY26');

    const years = ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18'];

    // Corporate Announcement data
    const corporateAnnouncementData = {
        FY26: [
            { year: 'FY 2025-26', description: 'Press Release', link: '/assets/investordata/corporate-announcement/TakeLimited.pdf' },
        ],
        FY25: [],
        FY24: [],
        FY23: [],
        FY22: [],
        FY21: [],
        FY20: [],
        FY19: [],
        FY18: [],
    };

    const currentYearData = corporateAnnouncementData[selectedYear];

    return (
        <div className="tab-content active">
            <h3 className="content-title">Corporate Announcement</h3>

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

            <div className="disclosure-table-wrapper">
                <table className="disclosure-table">
                    <thead>
                        <tr>
                            <th>Financial Year</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentYearData?.length > 0 ? (
                            currentYearData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.year}</td>
                                    <td>
                                        <a href={item.link} className="disclosure-description-link" target="_blank" rel="noopener noreferrer">
                                            <span className="pdf-icon-small">📄</span>
                                            {item.description}
                                        </a>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2">No announcements available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CorporateAnnouncement;
