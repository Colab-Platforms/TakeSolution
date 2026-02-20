import { useState } from 'react';
import StockInformation from './StockInformation';
// import FinancialResult from './FinancialResult';
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
    // { id: 'stock-information', label: 'Stock Information' },
    { id: 'financial-result', label: 'Financial Result' },
    { id: 'annual-report', label: 'Anual Report' },
    { id: 'investor-corner', label: 'Investor Corner' },
    { id: 'corporate-governance', label: 'Corporate Governance' },
    { id: 'Disclosure', label: 'Disclosure' },
    { id: 'Board of directors', label: 'Board of directors' },
    { id: 'Subsidiary Financials', label: 'Subsidiary Financials' },
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
              {/* <span className="section-subtitle">INVESTOR RELATIONS</span>
              <h2 className="section-heading">Investor Relations</h2> */}
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
                  {tab.label}
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
