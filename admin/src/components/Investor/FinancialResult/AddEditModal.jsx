import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { financialResultAPI } from '../../../services/api';
import { QUARTERS } from '../../../utils/constants';
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
  const [uploadMethod, setUploadMethod] = useState('upload'); // 'upload' or 'link'

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

          <Form.Group className="mb-3">
            <Form.Label>PDF Source</Form.Label>
            <div className="d-flex gap-3 mb-3">
              <Form.Check
                type="radio"
                label="Upload File"
                name="uploadMethod"
                checked={uploadMethod === 'upload'}
                onChange={() => setUploadMethod('upload')}
              />
              <Form.Check
                type="radio"
                label="Paste Link"
                name="uploadMethod"
                checked={uploadMethod === 'link'}
                onChange={() => setUploadMethod('link')}
              />
            </div>
          </Form.Group>

          {uploadMethod === 'upload' ? (
            <>
              <FileUpload
                onUploadSuccess={handleUploadSuccess}
                category="financial-result"
                label="Upload PDF"
              />
              {formData.pdfUrl && (
                <div className="alert alert-success mt-2">
                  ✓ File uploaded: {formData.pdfFileName}
                </div>
              )}
            </>
          ) : (
            <>
              <Form.Group className="mb-3">
                <Form.Label>PDF URL</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="https://example.com/your-file.pdf"
                  value={formData.pdfUrl}
                  onChange={handleUrlChange}
                  required
                />
                <Form.Text className="text-muted">
                  Paste the direct link to your PDF file (from GitHub, Google Drive, Dropbox, etc.)
                </Form.Text>
              </Form.Group>
              {formData.pdfUrl && (
                <div className="alert alert-info mt-2">
                  <small>
                    <strong>Preview:</strong> <a href={formData.pdfUrl} target="_blank" rel="noopener noreferrer">
                      {formData.pdfUrl}
                    </a>
                  </small>
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
