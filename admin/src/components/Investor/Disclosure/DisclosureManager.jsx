import React, { useState, useEffect } from 'react';
import { Button, Tab, Tabs, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { disclosureAPI } from '../../../services/api';
import { FISCAL_YEARS } from '../../../utils/constants';
import LoadingSpinner from '../../Common/LoadingSpinner';
import AddEditModal from './AddEditModal';
import ConfirmDialog from '../../Common/ConfirmDialog';

const DisclosureManager = () => {
  const [activeTab, setActiveTab] = useState('FY26');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await disclosureAPI.getAll(activeTab);
      if (response.data.success) {
        // Sort by date in descending order
        const sortedData = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
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
      const response = await disclosureAPI.delete(deleteItem._id);
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

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Disclosure</h4>
        <Button variant="primary" onClick={handleAdd}>
          + Add New
        </Button>
      </div>

      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        {FISCAL_YEARS.map((year) => (
          <Tab key={year} eventKey={year} title={year}>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th style={{ width: '20%' }}>Type</th>
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
                        <td>{item.type}</td>
                        <td>
                          <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                            {item.description}
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
            )}
          </Tab>
        ))}
      </Tabs>

      <AddEditModal
        show={showModal}
        onHide={handleModalClose}
        onSuccess={handleSuccess}
        item={selectedItem}
        fiscalYear={activeTab}
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

export default DisclosureManager;
