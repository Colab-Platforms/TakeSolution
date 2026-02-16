import { useState } from 'react';

const Reports = () => {
  const [selectedYear, setSelectedYear] = useState('FY25');

  const years = ['FY26', 'FY25', 'FY24', 'FY23', 'FY22', 'FY21', 'FY20', 'FY19', 'FY18', 'FY17', 'FY16', 'FY15', 'FY14', 'FY13', 'FY12'];

  // Aap yahan apna data add kar sakte hain
  const reportsData = {
    FY26: {
      annualReport: {
        title: 'Annual Report - FY26',
        image: '/assets/images/annual-report-fy26.png',
        link: '#'
      },
      quarters: [
        {
          quarter: 'Q4',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        },
        {
          quarter: 'Q3',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        },
        {
          quarter: 'Q2',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        },
        {
          quarter: 'Q1',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        }
      ]
    },
    FY25: {
      annualReport: {
        title: 'Annual Report - FY25',
        image: '/assets/images/annual-report-fy25.png',
        link: '#'
      },
      quarters: [
        {
          quarter: 'Q4',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        },
        {
          quarter: 'Q3',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        },
        {
          quarter: 'Q2',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        },
        {
          quarter: 'Q1',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        }
      ]
    },
    FY24: {
      annualReport: {
        title: 'Annual Report - FY24',
        image: '/assets/images/annual-report-fy24.png',
        link: '#'
      },
      quarters: [
        {
          quarter: 'Q4',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        },
        {
          quarter: 'Q3',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        },
        {
          quarter: 'Q2',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        },
        {
          quarter: 'Q1',
          consolidated: { title: 'Consolidated', link: '#' },
          standalone: { title: 'Standalone', link: '#' }
        }
      ]
    }
  };

  const currentYearData = reportsData[selectedYear] || reportsData['FY25'];

  return (
    <div className="tab-content active">
      <h3 className="content-title">Reports</h3>
      
      {/* Year Tabs */}
      <div className="reports-year-tabs">
        {years.map((year) => (
          <button
            key={year}
            className={`year-tab-btn ${selectedYear === year ? 'active' : ''}`}
            onClick={() => setSelectedYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Annual Report Section */}
      <div className="annual-report-section">
        <h4 className="report-section-title">{currentYearData.annualReport.title}</h4>
        <div className="annual-report-card">
          <a href={currentYearData.annualReport.link} target="_blank" rel="noopener noreferrer">
            <img 
              src={currentYearData.annualReport.image} 
              alt={currentYearData.annualReport.title}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150x200/ff3c00/ffffff?text=Annual+Report';
              }}
            />
          </a>
        </div>
      </div>

      {/* Quarterly Reports Grid */}
      <div className="quarterly-reports-grid">
        {currentYearData.quarters.map((quarterData, index) => (
          <div key={index} className="quarter-card">
            <div className="quarter-header">
              {quarterData.quarter} - {selectedYear}
            </div>
            <div className="quarter-content">
              <ul className="quarter-report-list">
                <li>
                  <a href={quarterData.consolidated.link} className="quarter-report-link">
                    • {quarterData.consolidated.title}
                  </a>
                </li>
                <li>
                  <a href={quarterData.standalone.link} className="quarter-report-link">
                    • {quarterData.standalone.title}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
