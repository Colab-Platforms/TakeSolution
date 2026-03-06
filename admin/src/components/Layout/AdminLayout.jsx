import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Sidebar from './Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <Container fluid className="p-4">
          {children}
        </Container>
      </div>
    </div>
  );
};

export default AdminLayout;
