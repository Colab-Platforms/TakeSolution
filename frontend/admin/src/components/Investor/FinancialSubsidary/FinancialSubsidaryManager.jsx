import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { financialSubsidaryAPI } from '../../../services/api';
import LoadingSpinner from '../../Common/LoadingSpinner';
import AddEditModal from './AddEditModal';
import ConfirmDialog from '../../Common/ConfirmDialog';

const FinancialSubsidaryManager = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

  // Helper function to get the correct PDF URL
  const getPdfUrl = (pdfUrl) => {
    if (!pdfUrl) return '#';
    // If it's an external URL (starts with http:// or https://), use it directly
    if (pdfUrl.startsWith('http://') || pdfUrl.startsWith('https://')) {
      return pdfUrl;
    }
    // Otherwise, it's a local path, prepend BASE_URL
    return `${BASE_URL}${pdfUrl}`;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await financialSubsidaryAPI.getAll();
      if (response.data.success) {
        // Sort by year in descending order
        const sortedData = response.data.data.sort((a, b) => {
          const yearA = parseInt(a.year.replace(/\D/g, ''));
          const yearB = parseInt(b.year.replace(/\D/g, ''));
          return yearB - yearA;
        });
        setData(sortedData);
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
      const response = await financialSubsidaryAPI.delete(deleteItem._id);
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
        <h4>Subsidiary Financials</h4>
        <Button variant="primary" onClick={handleAdd}>
          + Add New
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Year</th>
            <th style={{ width: '50%' }}>Description</th>
            <th style={{ width: '30%' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">No data available</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item._id}>
                <td><strong>{item.year}</strong></td>
                <td>
                  <a href={getPdfUrl(item.pdfUrl)} target="_blank" rel="noopener noreferrer">
                    📄 {item.description}
                  </a>
                </td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>

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
        message={`Are you sure you want to delete "${deleteItem?.description}"?`}
      />
    </div>
  );
};

export default FinancialSubsidaryManager;
