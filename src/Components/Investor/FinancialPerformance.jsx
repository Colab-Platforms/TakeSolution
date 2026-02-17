import { useState } from 'react';
import StockInformation from './StockInformation';
import Reports from './Reports';
import InvestorCorner from './InvestorCorner';
import CorporateGovernance from './CorporateGovernance';
import Disclosure from './Disclosure';
import './FinancialPerformance.css';

const FinancialPerformance = () => {
  const [activeTab, setActiveTab] = useState('reports');

  const tabs = [
    // { id: 'stock-information', label: 'Stock Information' },
    { id: 'reports', label: 'Financial & Other Reports' },
    { id: 'investor-corner', label: 'Investor Corner' },
    { id: 'corporate-governance', label: 'Corporate Governance' },
    { id: 'disclosure', label: 'Disclosure' }
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
              {activeTab === 'reports' && <Reports />}
              {activeTab === 'investor-corner' && <InvestorCorner />}
              {activeTab === 'corporate-governance' && <CorporateGovernance />}
              {activeTab === 'disclosure' && <Disclosure />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPerformance;
