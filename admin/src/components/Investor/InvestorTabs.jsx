import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import FinancialResultManager from './FinancialResult/FinancialResultManager';
import AnnualReportManager from './AnnualReport/AnnualReportManager';
import InvestorCornerManager from './InvestorCorner/InvestorCornerManager';
import CorporateGovernanceManager from './CorporateGovernance/CorporateGovernanceManager';
import DisclosureManager from './Disclosure/DisclosureManager';
import BoardOfDirectorsManager from './BoardOfDirectors/BoardOfDirectorsManager';
import FinancialSubsidaryManager from './FinancialSubsidary/FinancialSubsidaryManager';

const InvestorTabs = () => {
  const [activeTab, setActiveTab] = useState('financial-result');

  return (
    <div>
      <h3 className="mb-4">Investor Data Management</h3>
      
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-4">
        <Tab eventKey="financial-result" title="Financial Result">
          <FinancialResultManager />
        </Tab>
        
        <Tab eventKey="annual-report" title="Annual Report">
          <AnnualReportManager />
        </Tab>
        
        <Tab eventKey="investor-corner" title="Investor Corner">
          <InvestorCornerManager />
        </Tab>
        
        <Tab eventKey="corporate-governance" title="Corporate Governance">
          <CorporateGovernanceManager />
        </Tab>
        
        <Tab eventKey="disclosure" title="Disclosure">
          <DisclosureManager />
        </Tab>
        
        <Tab eventKey="board-of-directors" title="Board of Directors">
          <BoardOfDirectorsManager />
        </Tab>
        
        <Tab eventKey="subsidiary-financials" title="Subsidiary Financials">
          <FinancialSubsidaryManager />
        </Tab>
      </Tabs>
    </div>
  );
};

export default InvestorTabs;
