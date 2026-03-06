import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { clearAuthData, getUser } from '../../services/auth';
import { toast } from 'react-toastify';

const Header = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    clearAuthData();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container fluid>
        <Navbar.Brand>Investor CMS - Admin Panel</Navbar.Brand>
        <div className="d-flex align-items-center">
          <span className="text-white me-3">Welcome, {user?.username}</span>
          <Button variant="outline-light" size="sm" onClick={handleLogout}>
            <FiLogOut className="me-1" /> Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
