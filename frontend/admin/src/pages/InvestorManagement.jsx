import React from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import InvestorTabs from '../components/Investor/InvestorTabs';

const InvestorManagement = () => {
  return (
    <AdminLayout>
      <InvestorTabs />
    </AdminLayout>
  );
};

export default InvestorManagement;
