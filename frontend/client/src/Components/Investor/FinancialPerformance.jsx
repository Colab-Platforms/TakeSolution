import { useState } from 'react';
import InvestorCorner from './InvestorCorner';
import CorporateGovernance from './CorporateGovernance';
import Disclosure from './Disclosure';
import './FinancialPerformance.css';
import FinancialResult from './FinancialResult';
import AnnualReport from './AnnualReport';
import BoardOfDirectors from './BoardOfDirectors'
import FinancialSubsidary from './FinancialSubsidary';

const FinancialPerformance = () => {
  const [activeTab, setActiveTab] = useState('financial-result');

  const tabs = [
    { 
      id: 'financial-result', 
      label: 'Financial Result',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17ZM19 19H5V5H19V19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'annual-report', 
      label: 'Annual Report',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V9H18V20H6Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'investor-corner', 
      label: 'Investor Corner',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'corporate-governance', 
      label: 'Corporate Governance',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'Disclosure', 
      label: 'Disclosure',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'Board of directors', 
      label: 'Board of Directors',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'Subsidiary Financials', 
      label: 'Subsidiary Financials',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 18V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3H19C20.1 3 21 3.9 21 5V6H12C10.89 6 10 6.9 10 8V16C10 17.1 10.89 18 12 18H21ZM12 16H22V8H12V16ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z" fill="currentColor"/>
        </svg>
      )
    },
  ];

  return (
    <div className="investor-relations-area">
      <div className="container">
        {/* Logo */}
        <div className="row">
          <div className="col-lg-12">
            {/* <div className="investor-logo text-center">
              <img 
                src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/logo-TAKE.png?v=1771067701" 
                alt="Company Logo" 
                className="investor-page-logo"
              />
            </div> */}
          </div>
        </div>

        {/* Section Title */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              {/* <span className="section-subtitle">INVESTOR</span> */}
              <h2 className="section-heading">Investor </h2>
              <p className="section-desc">Comprehensive information for our investors and stakeholders</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="row">
          <div className="col-lg-12">
            <div className="investor-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content-wrapper">
              {/* {activeTab === 'stock-information' && <StockInformation />} */}
              {activeTab === 'financial-result' && <FinancialResult />}
              {activeTab === 'annual-report' && <AnnualReport /> }
              {activeTab === 'investor-corner' && <InvestorCorner />}
              {activeTab === 'corporate-governance' && <CorporateGovernance />}
              {activeTab === 'Disclosure' && <Disclosure/>}
              {activeTab === 'Board of directors' && <BoardOfDirectors/>}
              {activeTab === 'Subsidiary Financials' && <FinancialSubsidary/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPerformance;


