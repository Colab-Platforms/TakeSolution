import React from 'react';

const InvestorCorner = () => {
  // Data for different sections
  const eogmData = {
    title: 'Notice of the Extra Ordinary General Meeting',
    years: [
      { year: '2021', link: '#' },
      { year: '2025', link: '#' },
      { year: '2026', link: '#' }
    ]
  };

  const egmVotingData = {
    title: 'EGM Voting Results',
    years: [
      { year: '2021', link: '#' }
    ]
  };

  const agmNoticeData = {
    title: 'Notice of the Annual General Meeting',
    years: [
      { year: '2025', link: '#' },
      { year: '2024', link: '#' },
      { year: '2023', link: '#' },
      { year: '2022', link: '#' },
      { year: '2021', link: '#' },
      { year: '2020', link: '#' },
      { year: '2019', link: '#' },
      { year: '2018', link: '#' },
      { year: '2017', link: '#' },
      { year: '2016', link: '#' },
      { year: '2015', link: '#' },
      { year: '2014', link: '#' },
      { year: '2013', link: '#' }
    ]
  };

  const agmVotingData = {
    title: 'AGM Voting Results',
    years: [
      { year: '2022', link: '#' },
      { year: '2021', link: '#' },
      { year: '2020', link: '#' },
      { year: '2019', link: '#' },
      { year: '2018', link: '#' },
      { year: '2017', link: '#' }
    ]
  };

  const postalBallotData = {
    title: 'Notice of the Postal Ballot',
    years: [
      { year: '2023', link: '#' },
      { year: '2022', link: '#' }
    ]
  };

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
    </div>
  );
};

export default InvestorCorner;
