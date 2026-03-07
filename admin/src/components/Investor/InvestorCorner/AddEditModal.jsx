import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { investorCornerAPI } from '../../../services/api';
import { INVESTOR_CORNER_CATEGORIES } from '../../../utils/constants';
import FileUpload from '../../Common/FileUpload';

const AddEditModal = ({ show, onHide, onSuccess, item, category }) => {
  const [formData, setFormData] = useState({
    category: category,
    year: '',
    pdfUrl: '',
    pdfFileName: ''
  });
  const [loading, setLoading] = useState(false);
  const [uploadMethod, setUploadMethod] = useState('upload'); // 'upload' or 'link'

  // Generate year options (2018-2030)
  const yearOptions = [];
  for (let year = 2030; year >= 2018; year--) {
    yearOptions.push(year.toString());
  }

  useEffect(() => {
    if (item) {
      setFormData({
        category: item.category,
        year: item.year,
        pdfUrl: item.pdfUrl,
        pdfFileName: item.pdfFileName
      });
    } else {
      setFormData({
        category: category,
        year: '',
        pdfUrl: '',
        pdfFileName: ''
      });
    }
  }, [item, category, show]);

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
        response = await investorCornerAPI.update(item._id, formData);
      } else {
        response = await investorCornerAPI.create(formData);
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

  const getCategoryLabel = (value) => {
    const cat = INVESTOR_CORNER_CATEGORIES.find(c => c.value === value);
    return cat ? cat.label : value;
  };

  // Determine if this is a "Notice" or "Results" type
  const getDocumentType = () => {
    if (category.includes('Voting')) {
      return 'Results';
    }
    return 'Notice';
  };

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{item ? 'Edit' : 'Add'} {getCategoryLabel(category)}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              value={getCategoryLabel(formData.category)}
              disabled
            />
            <Form.Text className="text-muted">
              Document Type: {getDocumentType()}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Financial Year</Form.Label>
            <Form.Select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </Form.Select>
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
              <FileUpload onUploadSuccess={handleUploadSuccess} category="investor-corner" label="Upload PDF" />
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
