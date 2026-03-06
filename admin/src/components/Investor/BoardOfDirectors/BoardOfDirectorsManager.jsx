import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { boardOfDirectorsAPI } from '../../../services/api';
import LoadingSpinner from '../../Common/LoadingSpinner';
import AddEditModal from './AddEditModal';
import ConfirmDialog from '../../Common/ConfirmDialog';

const BoardOfDirectorsManager = () => {
  const [data, setData] = useState([]);
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
      const response = await boardOfDirectorsAPI.getAll();
      if (response.data.success) {
        // Sort by order
        const sortedData = response.data.data.sort((a, b) => a.order - b.order);
        setData(sortedData);
      }
    } catch (error) {
      toast.error('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (imageUrl) => {
    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    // Otherwise, prepend the base URL
    const baseUrl = process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000';
    return `${baseUrl}${imageUrl}`;
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
      const response = await boardOfDirectorsAPI.delete(deleteItem._id);
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

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Board of Directors</h4>
        <Button variant="primary" onClick={handleAdd}>
          + Add New Image
        </Button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">No images available. Click "Add New Image" to get started.</p>
        </div>
      ) : (
        <Row>
          {data.map((item, index) => (
            <Col key={item._id} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={getImageUrl(item.imageUrl)} 
                  alt={`Board Member ${index + 1}`}
                  style={{ height: '300px', objectFit: 'contain', padding: '10px' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">Order: {item.order}</span>
                    <div>
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
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <AddEditModal
        show={showModal}
        onHide={handleModalClose}
        onSuccess={handleSuccess}
        item={selectedItem}
      />

      <ConfirmDialog
        show={showDeleteDialog}
        onHide={() => setShowDeleteDialog(false)}
        onConfirm={confirmDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this board member image?"
      />
    </div>
  );
};

export default BoardOfDirectorsManager;
