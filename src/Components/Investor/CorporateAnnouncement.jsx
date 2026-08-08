const CorporateAnnouncement = () => {
    // Corporate Announcement data
    const CorporateAnnouncementData = [
        { year: 'FY 2025-26', description: 'Press Release', link: '/assets/investordata/corporate-announcement/TakeLimited.pdf' },

    ];

    return (
        <div className="tab-content active">
            <h3 className="content-title">Corporate Announcement</h3>

            <div className="disclosure-table-wrapper">
                <table className="disclosure-table">
                    <thead>
                        <tr>
                            <th>Financial Year</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CorporateAnnouncementData.map((item, index) => (
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
        </div>
    );
};

export default CorporateAnnouncement;
