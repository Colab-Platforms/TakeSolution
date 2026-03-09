import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FiEdit, FiTrash2, FiExternalLink } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { annualReportAPI } from '../../../services/api';
import LoadingSpinner from '../../Common/LoadingSpinner';
import ConfirmDialog from '../../Common/ConfirmDialog';
import AddEditModal from './AddEditModal';

const AnnualReportManager = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

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
      const response = await annualReportAPI.getAll();
      if (response.data.success) setData(response.data.data);
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
      const response = await annualReportAPI.delete(deleteItem._id);
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

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Annual Report</h4>
        <Button variant="primary" onClick={handleAdd}>+ Add New</Button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-5 text-muted">No data available</div>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Year</th>
              <th>Description</th>
              <th>PDF</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.year}</td>
                <td>{item.description}</td>
                <td>
                  <a href={getPdfUrl(item.pdfUrl)} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary">
                    <FiExternalLink className="me-1" />View PDF
                  </a>
                </td>
                <td>
                  <Button variant="warning" size="sm" className="me-2" onClick={() => handleEdit(item)}>
                    <FiEdit />
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(item)}>
                    <FiTrash2 />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <AddEditModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSuccess={() => { fetchData(); setShowModal(false); }}
        item={selectedItem}
      />

      <ConfirmDialog
        show={showDeleteDialog}
        onHide={() => setShowDeleteDialog(false)}
        onConfirm={confirmDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this annual report?"
      />
    </div>
  );
};

export default AnnualReportManager;
