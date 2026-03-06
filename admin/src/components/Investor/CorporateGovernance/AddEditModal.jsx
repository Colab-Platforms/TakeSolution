import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { corporateGovernanceAPI } from '../../../services/api';
import FileUpload from '../../Common/FileUpload';

const AddEditModal = ({ show, onHide, onSuccess, item, existingCategories }) => {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    pdfUrl: '',
    pdfFileName: ''
  });
  const [loading, setLoading] = useState(false);
  const [isCustomCategory, setIsCustomCategory] = useState(false);

  // Predefined section titles
  const sectionTitles = [
    { value: 'Policy', label: 'Corporate Governance Policies' },
    { value: 'Dematerialisation', label: 'Mandatory Dematerialisation of Shares for Transfer Requests' },
    { value: 'Grievance', label: 'Investor Grievance' },
    { value: 'MOA_AOA', label: 'MOA & AOA' }
  ];

  useEffect(() => {
    if (item) {
      setFormData({
        category: item.category,
        title: item.title,
        pdfUrl: item.pdfUrl,
        pdfFileName: item.pdfFileName
      });
      setIsCustomCategory(false);
    } else {
      setFormData({
        category: '',
        title: '',
        pdfUrl: '',
        pdfFileName: ''
      });
      setIsCustomCategory(false);
    }
  }, [item, show]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === 'custom') {
      setIsCustomCategory(true);
      setFormData({
        ...formData,
        category: ''
      });
    } else {
      setIsCustomCategory(false);
      setFormData({
        ...formData,
        category: value
      });
    }
  };

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

    if (!formData.category) {
      toast.error('Please select or enter a section title');
      return;
    }

    if (!formData.title) {
      toast.error('Please enter a PDF name/title');
      return;
    }

    if (!formData.pdfUrl) {
      toast.error('Please upload a PDF file');
      return;
    }

    setLoading(true);

    try {
      let response;
      if (item) {
        response = await corporateGovernanceAPI.update(item._id, formData);
      } else {
        response = await corporateGovernanceAPI.create(formData);
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
        <Modal.Title>{item ? 'Edit' : 'Add'} Corporate Governance Document</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Section Title</Form.Label>
            {!item && (
              <Form.Select
                value={isCustomCategory ? 'custom' : formData.category}
                onChange={handleCategoryChange}
                required
              >
                <option value="">Select Section</option>
                {sectionTitles.map((section) => (
                  <option key={section.value} value={section.value}>
                    {section.label}
                  </option>
                ))}
                <option value="custom">+ Create New Section</option>
              </Form.Select>
            )}
            {item && (
              <Form.Control
                type="text"
                value={sectionTitles.find(s => s.value === formData.category)?.label || formData.category}
                disabled
              />
            )}
            <Form.Text className="text-muted">
              {isCustomCategory 
                ? 'Enter a new section title below to create a new category' 
                : 'Select an existing section or create a new one'}
            </Form.Text>
          </Form.Group>

          {isCustomCategory && (
            <Form.Group className="mb-3">
              <Form.Label>New Section Title</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g., Risk Management Policies"
                required
              />
              <Form.Text className="text-muted">
                This will create a new section in Corporate Governance
              </Form.Text>
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>PDF Name/Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Code of Conduct for Directors"
              required
            />
            <Form.Text className="text-muted">
              This will be displayed as the document name
            </Form.Text>
          </Form.Group>

          <FileUpload
            onUploadSuccess={handleUploadSuccess}
            category="corporate-governance"
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
            {loading ? 'Saving...' : item ? 'Update' : 'Submit'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddEditModal;
