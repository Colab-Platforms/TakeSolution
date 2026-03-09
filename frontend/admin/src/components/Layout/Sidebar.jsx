import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiFileText } from 'react-icons/fi';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-light border-end" style={{ minHeight: 'calc(100vh - 56px)', width: '250px' }}>
      <Nav className="flex-column p-3">
        <Nav.Link
          as={Link}
          to="/dashboard"
          className={isActive('/dashboard') ? 'active bg-primary text-white rounded mb-2' : 'mb-2'}
        >
          <FiHome className="me-2" />
          Dashboard
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/investor-management"
          className={isActive('/investor-management') ? 'active bg-primary text-white rounded mb-2' : 'mb-2'}
        >
          <FiFileText className="me-2" />
          Investor Management
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
