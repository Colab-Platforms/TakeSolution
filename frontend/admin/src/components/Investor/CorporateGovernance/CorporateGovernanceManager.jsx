import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { corporateGovernanceAPI } from '../../../services/api';
import LoadingSpinner from '../../Common/LoadingSpinner';
import AddEditModal from './AddEditModal';
import ConfirmDialog from '../../Common/ConfirmDialog';

const CorporateGovernanceManager = () => {
  const [groupedData, setGroupedData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await corporateGovernanceAPI.getAll();
      if (response.data.success) {
        // Group data by category
        const grouped = response.data.data.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = [];
          }
          acc[item.category].push(item);
          return acc;
        }, {});
        setGroupedData(grouped);
      }
    } catch (error) {
      toast.error('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setShowModal(true);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleDelete = (item) => {
    setDeleteItem(item);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    try {
      const response = await corporateGovernanceAPI.delete(deleteItem._id);
      if (response.data.success) {
        toast.success('Deleted successfully');
        fetchData();
      }
    } catch (error) {
      toast.error('Failed to delete');
    } finally {
      setShowDeleteDialog(false);
      setDeleteItem(null);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleSuccess = () => {
    fetchData();
    handleModalClose();
  };

  const getPdfUrl = (pdfUrl) => {
    // If it's already a full URL, return as is
    if (pdfUrl.startsWith('http')) {
      return pdfUrl;
    }
    // Otherwise, prepend the base URL
    const baseUrl = import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:5000';
    return `${baseUrl}${pdfUrl}`;
  };

  const getCategoryTitle = (category) => {
    const titles = {
      'Policy': 'Corporate Governance Policies',
      'Dematerialisation': 'Mandatory Dematerialisation of Shares for Transfer Requests',
      'Grievance': 'Investor Grievance',
      'MOA_AOA': 'MOA & AOA'
    };
    // Return mapped title or use the category as-is for custom sections
    return titles[category] || category;
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Corporate Governance</h4>
        <Button variant="primary" onClick={handleAdd}>
          + Add New Document
        </Button>
      </div>

      {Object.keys(groupedData).length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">No documents available. Click "Add New Document" to get started.</p>
        </div>
      ) : (
        Object.entries(groupedData).map(([category, items]) => (
          <div key={category} className="mb-5">
            <h5 className="mb-3 text-primary">{getCategoryTitle(category)}</h5>
            <Row>
              {items.map((item) => (
                <Col key={item._id} md={6} lg={4} className="mb-3">
                  <Card className="h-100 shadow-sm">
                    <Card.Body>
                      <div className="d-flex align-items-start mb-2">
                        <span className="me-2" style={{ fontSize: '1.5rem' }}>📄</span>
                        <div className="flex-grow-1">
                          <Card.Title style={{ fontSize: '0.95rem' }}>
                            {item.title}
                          </Card.Title>
                        </div>
                      </div>
                      <div className="mt-3">
                        <a 
                          href={getPdfUrl(item.pdfUrl)} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary me-2"
                        >
                          View PDF
                        </a>
                        <Button
                          variant="outline-warning"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEdit(item)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(item)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))
      )}

      <AddEditModal
        show={showModal}
        onHide={handleModalClose}
        onSuccess={handleSuccess}
        item={selectedItem}
        existingCategories={Object.keys(groupedData)}
      />

      <ConfirmDialog
        show={showDeleteDialog}
        onHide={() => setShowDeleteDialog(false)}
        onConfirm={confirmDelete}
        title="Confirm Delete"
        message={`Are you sure you want to delete "${deleteItem?.title}"?`}
      />
    </div>
  );
};

export default CorporateGovernanceManager;
