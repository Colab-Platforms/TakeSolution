import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { financialResultAPI } from '../../../../services/adminApi';
import { QUARTERS } from '../../../../utils/adminConstants';
import FileUpload from '../../Common/FileUpload';

const AddEditModal = ({ show, onHide, onSuccess, item, fiscalYear }) => {
  const [formData, setFormData] = useState({
    fiscalYear: fiscalYear,
    year: '',
    quarter: 'Q1',
    description: '',
    pdfUrl: '',
    pdfFileName: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (item) {
      setFormData({
        fiscalYear: item.fiscalYear,
        year: item.year,
        quarter: item.quarter,
        description: item.description,
        pdfUrl: item.pdfUrl,
        pdfFileName: item.pdfFileName
      });
    } else {
      // Extract year from fiscalYear (e.g., "FY26" -> "2026")
      const yearFromFY = fiscalYear ? `20${fiscalYear.replace('FY', '')}` : '';
      
      setFormData({
        fiscalYear: fiscalYear,
        year: yearFromFY,
        quarter: 'Q1',
        description: '',
        pdfUrl: '',
        pdfFileName: ''
      });
    }
  }, [item, fiscalYear, show]);

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
        response = await financialResultAPI.update(item._id, formData);
      } else {
        response = await financialResultAPI.create(formData);
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
        <Modal.Title>{item ? 'Edit' : 'Add'} Financial Result</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Fiscal Year</Form.Label>
            <Form.Control
              type="text"
              value={formData.fiscalYear}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              name="year"
              value={formData.year}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Quarter</Form.Label>
            <Form.Select
              name="quarter"
              value={formData.quarter}
              onChange={handleChange}
              required
            >
              {QUARTERS.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g., Consolidated_Q1_FY26_TSL"
              required
            />
          </Form.Group>

          <FileUpload
            onUploadSuccess={handleUploadSuccess}
            category="financial-result"
            label="Upload PDF"
          />

          {formData.pdfUrl && (
            <div className="alert alert-success">
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
