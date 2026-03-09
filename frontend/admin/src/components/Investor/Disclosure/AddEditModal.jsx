import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { disclosureAPI } from '../../../services/api';
import FileUpload from '../../Common/FileUpload';

const AddEditModal = ({ show, onHide, onSuccess, item, fiscalYear }) => {
  const [formData, setFormData] = useState({
    type: 'Other Disclosures',
    fiscalYear: fiscalYear,
    date: '',
    description: '',
    pdfUrl: '',
    pdfFileName: ''
  });
  const [loading, setLoading] = useState(false);
  const [uploadMethod, setUploadMethod] = useState('upload'); // 'upload' or 'link'

  useEffect(() => {
    if (item) {
      setFormData({
        type: item.type,
        fiscalYear: item.fiscalYear,
        date: item.date ? item.date.split('T')[0] : '',
        description: item.description,
        pdfUrl: item.pdfUrl,
        pdfFileName: item.pdfFileName
      });
    } else {
      setFormData({
        type: 'Other Disclosures',
        fiscalYear: fiscalYear,
        date: '',
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

  const handleUrlChange = (e) => {
    const url = e.target.value;
    setFormData({
      ...formData,
      pdfUrl: url,
      pdfFileName: url.split('/').pop() || 'External PDF'
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
        response = await disclosureAPI.update(item._id, formData);
      } else {
        response = await disclosureAPI.create(formData);
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
        <Modal.Title>{item ? 'Edit' : 'Add'} Disclosure</Modal.Title>
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
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="e.g., Other Disclosures"
              required
            />
            <Form.Text className="text-muted">
              Default: "Other Disclosures"
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date (Optional)</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              Leave empty if date is not applicable
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g., Press Release - TAKE Solutions Announces..."
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>PDF Source</Form.Label>
            <div className="d-flex gap-3 mb-3">
              <Form.Check type="radio" label="Upload File" name="uploadMethod" checked={uploadMethod === 'upload'} onChange={() => setUploadMethod('upload')} />
              <Form.Check type="radio" label="Paste Link" name="uploadMethod" checked={uploadMethod === 'link'} onChange={() => setUploadMethod('link')} />
            </div>
          </Form.Group>

          {uploadMethod === 'upload' ? (
            <>
              <FileUpload onUploadSuccess={handleUploadSuccess} category="disclosure" label="Upload PDF" />
              {formData.pdfUrl && (
                <div className="alert alert-success mt-3">
                  ✓ File uploaded: {formData.pdfFileName}
                </div>
              )}
            </>
          ) : (
            <>
              <Form.Group className="mb-3">
                <Form.Label>PDF URL</Form.Label>
                <Form.Control type="url" placeholder="https://example.com/your-file.pdf" value={formData.pdfUrl} onChange={handleUrlChange} required />
                <Form.Text className="text-muted">Paste the direct link to your PDF file (from GitHub, Google Drive, Dropbox, etc.)</Form.Text>
              </Form.Group>
              {formData.pdfUrl && (
                <div className="alert alert-info mt-3">
                  <small><strong>Preview:</strong> <a href={formData.pdfUrl} target="_blank" rel="noopener noreferrer">{formData.pdfUrl}</a></small>
                </div>
              )}
            </>
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
