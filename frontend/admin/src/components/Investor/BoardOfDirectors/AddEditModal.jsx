import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { boardOfDirectorsAPI, uploadAPI } from '../../../services/api';

const AddEditModal = ({ show, onHide, onSuccess, item }) => {
  const [formData, setFormData] = useState({
    imageUrl: '',
    imageFileName: '',
    order: 0
  });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const getImageUrl = (imageUrl) => {
    // If it's already a full URL, return as is
    if (imageUrl.startsWith('http')) {
      return imageUrl;
    }
    // Otherwise, prepend the base URL
    const baseUrl = process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000';
    return `${baseUrl}${imageUrl}`;
  };

  useEffect(() => {
    if (item) {
      setFormData({
        imageUrl: item.imageUrl,
        imageFileName: item.imageFileName,
        order: item.order
      });
    } else {
      setFormData({
        imageUrl: '',
        imageFileName: '',
        order: 0
      });
    }
    setSelectedFile(null);
  }, [item, show]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file');
        return;
      }
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB');
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error('Please select an image file');
      return;
    }

    setUploading(true);
    const formDataUpload = new FormData();
    // IMPORTANT: Append category BEFORE file so multer can read it
    formDataUpload.append('category', 'board-of-directors');
    formDataUpload.append('file', selectedFile);

    try {
      const response = await uploadAPI.upload(formDataUpload);
      if (response.data.success) {
        setFormData({
          ...formData,
          imageUrl: response.data.data.fileUrl,
          imageFileName: response.data.data.fileName
        });
        toast.success('Image uploaded successfully');
        setSelectedFile(null);
      }
    } catch (error) {
      toast.error(error.response?.data?.error || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.imageUrl) {
      toast.error('Please upload an image');
      return;
    }

    setLoading(true);

    try {
      let response;
      if (item) {
        response = await boardOfDirectorsAPI.update(item._id, formData);
      } else {
        response = await boardOfDirectorsAPI.create(formData);
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
        <Modal.Title>{item ? 'Edit' : 'Add'} Board Member Image</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Display Order</Form.Label>
            <Form.Control
              type="number"
              name="order"
              value={formData.order}
              onChange={handleChange}
              placeholder="0"
              required
            />
            <Form.Text className="text-muted">
              Lower numbers appear first (0, 1, 2, ...)
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
            />
            <Form.Text className="text-muted">
              Supported formats: JPG, PNG, GIF. Max size: 10MB
            </Form.Text>
          </Form.Group>

          {selectedFile && (
            <div className="mb-3">
              <div className="alert alert-info">
                Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
              </div>
              <Button 
                variant="secondary" 
                onClick={handleUpload}
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Upload File'}
              </Button>
            </div>
          )}

          {formData.imageUrl && (
            <div className="alert alert-success">
              <div className="mb-2">✓ Image uploaded: {formData.imageFileName}</div>
              <img 
                src={getImageUrl(formData.imageUrl)} 
                alt="Preview" 
                style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'contain' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23ddd" width="100" height="100"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                }}
              />
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
