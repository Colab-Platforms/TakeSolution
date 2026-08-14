import { useState } from 'react';

const CorporateAnnouncement = () => {
    const [selectedYear, setSelectedYear] = useState('FY26');

    const years = ['FY27','FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18'];

    // Corporate Announcement data
    const corporateAnnouncementData = {
        FY27: [],
        FY26: [
            { year: 'FY 2025-26', description: 'Newspaper Advt for Postal ballot 13.07.2026', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1786710523/Newspaper_Advt_for_Postal_ballot_13.07.2026_gd15cc.pdf' },
            { year: 'FY 2025-26', description: 'CC 74 5-30.06.2026', link: 'https://res.cloudinary.com/dlmcpmdpn/image/upload/v1786710347/CC_74_5_-30.06.2026_xyc20e.pdf' },
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
