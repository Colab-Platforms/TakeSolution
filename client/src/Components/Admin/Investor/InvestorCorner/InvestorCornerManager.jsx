import React, { useState, useEffect } from 'react';
import { Button, Tab, Tabs, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { investorCornerAPI } from '../../../../services/adminApi';
import { INVESTOR_CORNER_CATEGORIES } from '../../../../utils/adminConstants';
import LoadingSpinner from '../../Common/LoadingSpinner';
import AddEditModal from './AddEditModal';
import ConfirmDialog from '../../Common/ConfirmDialog';

const InvestorCornerManager = () => {
  const [activeTab, setActiveTab] = useState('EOGM');
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
      const response = await investorCornerAPI.getAll(activeTab);
      if (response.data.success) {
        // Sort by year in descending order
        const sortedData = response.data.data.sort((a, b) => b.year - a.year);
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
      const response = await investorCornerAPI.delete(deleteItem._id);
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
        <h4>Investor Corner</h4>
        <Button variant="primary" onClick={handleAdd}>
          + Add New
        </Button>
      </div>

      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        {INVESTOR_CORNER_CATEGORIES.map((category) => (
          <Tab key={category.value} eventKey={category.value} title={category.label}>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th style={{ width: '15%' }}>Financial Year</th>
                    <th style={{ width: '50%' }}>PDF File</th>
                    <th style={{ width: '35%' }}>Actions</th>
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
                          <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                            📄 {item.pdfFileName}
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
        category={activeTab}
      />

      <ConfirmDialog
        show={showDeleteDialog}
        onHide={() => setShowDeleteDialog(false)}
        onConfirm={confirmDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this item?"
      />
    </div>
  );
};

export default InvestorCornerManager;
