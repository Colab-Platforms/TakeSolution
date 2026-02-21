import React from 'react';

const InvestorCorner = () => {
  // Data for different sections
  const eogmData = {
    title: 'Notice of the Extra Ordinary General Meeting',
    years: [
      { year: '2021', link: '/assets/investordata/investor-corner/extra-ordinary-general-meeting/Final_EGM_Notice_Sept29_2021.pdf' },
      { year: '2024', link: '/assets/investordata/investor-corner/extra-ordinary-general-meeting/Notice_EGM_TSL_2024.pdf' },
      { year: '2025', link: '/assets/investordata/investor-corner/extra-ordinary-general-meeting/Notice of EOGM 2025.pdf' },
      { year: '2026', link: '/assets/investordata/investor-corner/extra-ordinary-general-meeting/TS-EOGM-Notice-Final.pdf' }
    ]
  };

  const egmVotingData = {
    title: 'EGM Voting Results',
    years: [
      { year: '2021', link: '/assets/investordata/investor-corner/EGM Voting Results/Reg44_Voting_Results_261021.pdf' },
      { year: '2024', link: '/assets/investordata/investor-corner/EGM Voting Results/Microsoft Word - EGM_Proceedings_2024.pdf' },
      { year: '2025', link: '/assets/investordata/investor-corner/EGM Voting Results/EGM_Proceedings_2025.pdf' }
    ]
  };

  const agmNoticeData = {
    title: 'Notice of the Annual General Meeting',
    years: [
      { year: '2025', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2025.pdf' },
      { year: '2024', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2024.pdf' },
      { year: '2023', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2023.pdf' },
      { year: '2022', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2022.pdf' },
      { year: '2021', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2021.pdf' },
      { year: '2020', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/TAKE_Solutions_AGM_Notice_2020.pdf' },
      { year: '2019', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/take-solution-notice-2019.pdf' },
      { year: '2018', link: '/assets/investordata/investor-corner/Notice of the Annual General Meeting/Notice-2018-FINAL.pdf' },
      
    ]
  };

  const agmVotingData = {
    title: 'AGM Voting Results',
    years: [
      
      { year: '2025', link: '/assets/investordata/investor-corner/AGM Voting Results/AGM voting results 2025.pdf' },
      { year: '2024', link: '/assets/investordata/investor-corner/AGM Voting Results/AGM voting results 2024.pdf' },
      { year: '2023', link: '/assets/investordata/investor-corner/AGM Voting Results/AGM voting results 2023.pdf' },
      { year: '2022', link: '/assets/investordata/investor-corner/AGM Voting Results/Voting_Results_Scrutinizer_Report_AGM_261222.pdf' },
      { year: '2021', link: '/assets/investordata/investor-corner/AGM Voting Results/Voting_Results_2021.pdf' },
      { year: '2020', link: '/assets/investordata/investor-corner/AGM Voting Results/AGM PROCEEDINGS 2020.pdf' },
      { year: '2019', link: '/assets/investordata/investor-corner/AGM Voting Results/agm-voting-08aug2019.pdf' },
      { year: '2018', link: '/assets/investordata/investor-corner/AGM Voting Results/agm-voting-10aug2018.pdf' },
      
    ]
  };

  const postalBallotData = {
    title: 'Notice of the Postal Ballot',
    years: [
      { year: '2023', link: '/assets/investordata/investor-corner/Notice of the Postal Ballot/Take_Postal_Ballot_Notice_FY22-23.pdf' },
      { year: '2022', link: '/assets/investordata/investor-corner/Notice of the Postal Ballot/Take_Postal_Ballot_Notice_1.pdf' },
      { year: '2022', link: '/assets/investordata/investor-corner/Notice of the Postal Ballot/Postal_Ballot_Notice_TSL.pdf' },
    ]
  };

  const postalBallotVotingData = {
    title: 'Postal Ballot Voting Rseult',
    years: [
      { year: '2023', link: '/assets/investordata/investor-corner/Notice of the Postal Ballot/Take_Postal_Ballot_Notice_1.pdf' },
      { year: '2022', link: '/assets/investordata/investor-corner/Notice of the Postal Ballot/Take_Postal_Ballot_Notice_1.pdf' },
      { year: '2022', link: '/assets/investordata/investor-corner/Notice of the Postal Ballot/Take_Postal_Ballot_Notice_1.pdf' },

    ]
  }

  return (
    <div className="tab-content active">
      <h3 className="content-title">Investor Corner</h3>

      {/* EOGM Notice */}
      <div className="investor-table-section">
        <h4 className="table-section-title">{eogmData.title}</h4>
        <div className="investor-table">
          <div className="table-row table-header">
            <div className="table-cell">Financial Year</div>
            {eogmData.years.map((item, index) => (
              <div key={index} className="table-cell">{item.year}</div>
            ))}
          </div>
          <div className="table-row">
            <div className="table-cell">Notice</div>
            {eogmData.years.map((item, index) => (
              <div key={index} className="table-cell">
                <a href={item.link} className="pdf-link" target="_blank" rel="noopener noreferrer">
                  📄
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EGM Voting Results */}
      <div className="investor-table-section">
        <h4 className="table-section-title">{egmVotingData.title}</h4>
        <div className="investor-table">
          <div className="table-row table-header">
            <div className="table-cell">Financial Year</div>
            {egmVotingData.years.map((item, index) => (
              <div key={index} className="table-cell">{item.year}</div>
            ))}
          </div>
          <div className="table-row">
            <div className="table-cell">Results</div>
            {egmVotingData.years.map((item, index) => (
              <div key={index} className="table-cell">
                <a href={item.link} className="pdf-link" target="_blank" rel="noopener noreferrer">
                  📄
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AGM Notice */}
      <div className="investor-table-section">
        <h4 className="table-section-title">{agmNoticeData.title}</h4>
        <div className="investor-table">
          <div className="table-row table-header">
            <div className="table-cell">Financial Year</div>
            {agmNoticeData.years.map((item, index) => (
              <div key={index} className="table-cell">{item.year}</div>
            ))}
          </div>
          <div className="table-row">
            <div className="table-cell">Notice</div>
            {agmNoticeData.years.map((item, index) => (
              <div key={index} className="table-cell">
                <a href={item.link} className="pdf-link" target="_blank" rel="noopener noreferrer">
                  📄
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AGM Voting Results */}
      <div className="investor-table-section">
        <h4 className="table-section-title">{agmVotingData.title}</h4>
        <div className="investor-table">
          <div className="table-row table-header">
            <div className="table-cell">Financial Year</div>
            {agmVotingData.years.map((item, index) => (
              <div key={index} className="table-cell">{item.year}</div>
            ))}
          </div>
          <div className="table-row">
            <div className="table-cell">Results</div>
            {agmVotingData.years.map((item, index) => (
              <div key={index} className="table-cell">
                <a href={item.link} className="pdf-link" target="_blank" rel="noopener noreferrer">
                  📄
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Postal Ballot Notice */}
      <div className="investor-table-section">
        <h4 className="table-section-title">{postalBallotData.title}</h4>
        <div className="investor-table">
          <div className="table-row table-header">
            <div className="table-cell">Financial Year</div>
            {postalBallotData.years.map((item, index) => (
              <div key={index} className="table-cell">{item.year}</div>
            ))}
          </div>
          <div className="table-row">
            <div className="table-cell">Notice</div>
            {postalBallotData.years.map((item, index) => (
              <div key={index} className="table-cell">
                <a href={item.link} className="pdf-link" target="_blank" rel="noopener noreferrer">
                  📄
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Postal Ballot Voting Result */}
      <div className="investor-table-section">
        <h4 className="table-section-title">{postalBallotVotingData.title}</h4>
        <div className="investor-table">
          <div className="table-row table-header">
            <div className="table-cell">Financial Year</div>
            {postalBallotData.years.map((item, index) => (
              <div key={index} className="table-cell">{item.year}</div>
            ))}
          </div>
          <div className="table-row">
            <div className="table-cell">Notice</div>
            {postalBallotData.years.map((item, index) => (
              <div key={index} className="table-cell">
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

export default InvestorCorner;
