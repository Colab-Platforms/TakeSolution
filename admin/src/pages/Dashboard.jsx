import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiFileText, FiUsers, FiTrendingUp } from 'react-icons/fi';
import AdminLayout from '../components/Layout/AdminLayout';

const Dashboard = () => {
  return (
    <AdminLayout>
      <h2 className="mb-4">Dashboard</h2>

      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FiFileText size={40} className="text-primary me-3" />
                <div>
                  <h5 className="mb-0">Investor Data</h5>
                  <p className="text-muted mb-0">Manage all investor information</p>
                </div>
              </div>
              <Link to="/investor-management" className="btn btn-primary btn-sm">
                Manage
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FiTrendingUp size={40} className="text-success me-3" />
                <div>
                  <h5 className="mb-0">Financial Results</h5>
                  <p className="text-muted mb-0">Quarterly financial data</p>
                </div>
              </div>
              <Link to="/investor-management" className="btn btn-success btn-sm">
                View
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <FiUsers size={40} className="text-info me-3" />
                <div>
                  <h5 className="mb-0">Board of Directors</h5>
                  <p className="text-muted mb-0">Manage board information</p>
                </div>
              </div>
              <Link to="/investor-management" className="btn btn-info btn-sm">
                Manage
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mt-4">
        <Card.Body>
          <h5>Quick Guide</h5>
          <ul>
            <li>Navigate to <strong>Investor Management</strong> to manage all investor data</li>
            <li>Use the tabs to switch between different data types</li>
            <li>Click <strong>Add New</strong> button to create new entries</li>
            <li>Use <strong>Edit</strong> and <strong>Delete</strong> buttons to modify existing data</li>
            <li>Upload PDF files for financial documents</li>
          </ul>
        </Card.Body>
      </Card>
    </AdminLayout>
  );
};

export default Dashboard;
