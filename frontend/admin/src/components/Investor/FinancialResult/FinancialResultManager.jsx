import React, { useState, useEffect } from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { financialResultAPI } from '../../../services/api';
import { FISCAL_YEARS } from '../../../utils/constants';
import LoadingSpinner from '../../Common/LoadingSpinner';
import DataTable from './DataTable';
import AddEditModal from './AddEditModal';
import ConfirmDialog from '../../Common/ConfirmDialog';

const FinancialResultManager = () => {
  const [activeTab, setActiveTab] = useState('FY26');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await financialResultAPI.getAll(activeTab);
      if (response.data.success) {
        setData(response.data.data);
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
      const response = await financialResultAPI.delete(deleteItem._id);
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
        <h4>Financial Result</h4>
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
              <DataTable
                data={data}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
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
        message="Are you sure you want to delete this financial result?"
      />
    </div>
  );
};

export default FinancialResultManager;
