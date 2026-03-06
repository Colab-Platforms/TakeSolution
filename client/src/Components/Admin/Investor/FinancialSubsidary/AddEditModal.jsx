import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { financialSubsidaryAPI } from '../../../../services/adminApi';
import FileUpload from '../../Common/FileUpload';

const AddEditModal = ({ show, onHide, onSuccess, item }) => {
  const [formData, setFormData] = useState({
    year: '',
    description: '',
    pdfUrl: '',
    pdfFileName: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (item) {
      setFormData({
        year: item.year,
        description: item.description,
        pdfUrl: item.pdfUrl,
        pdfFileName: item.pdfFileName
      });
    } else {
      setFormData({
        year: '',
        description: '',
        pdfUrl: '',
        pdfFileName: ''
      });
    }
  }, [item, show]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUploadSuccess = (fileData) => {
    setFormData({
      ...formData,
      pdfUrl: fileData.fileUrl,
      pdfFileName: fileData.fileName
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.pdfUrl) {
      toast.error('Please upload a PDF file');
      return;
    }

    setLoading(true);

    try {
      let response;
      if (item) {
        response = await financialSubsidaryAPI.update(item._id, formData);
      } else {
        response = await financialSubsidaryAPI.create(formData);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        onSuccess();
      }
    } catch (error) {
      toast.error(error.response?.data?.error || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{item ? 'Edit' : 'Add'} Subsidiary Financial</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              name="year"
              value={formData.year}
              onChange={handleChange}
              placeholder="e.g., FY-2024"
              required
            />
            <Form.Text className="text-muted">
              Format: FY-YYYY (e.g., FY-2024)
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g., subsidiary-company-financials_fy-2023-24"
              required
            />
          </Form.Group>

          <FileUpload
            onUploadSuccess={handleUploadSuccess}
            category="subsidiary-financials"
            label="Upload PDF"
          />

          {formData.pdfUrl && (
            <div className="alert alert-success mt-3">
              ✓ File uploaded: {formData.pdfFileName}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? 'Saving...' : item ? 'Update' : 'Create'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddEditModal;
