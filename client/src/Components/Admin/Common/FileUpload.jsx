import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { uploadAPI } from '../../services/api';
import { toast } from 'react-toastify';

const FileUpload = ({ onUploadSuccess, category, accept = '.pdf', label = 'Upload PDF' }) => {
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error('Please select a file');
      return;
    }

    const formData = new FormData();
    // IMPORTANT: Add category BEFORE the file
    formData.append('category', category);
    formData.append('file', selectedFile);

    setUploading(true);

    try {
      const response = await uploadAPI.upload(formData);
      
      if (response.data.success) {
        toast.success('File uploaded successfully');
        onUploadSuccess(response.data.data);
        setSelectedFile(null);
        // Reset file input
        document.getElementById('file-upload-input').value = '';
      }
    } catch (error) {
      toast.error(error.response?.data?.error || 'Failed to upload file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          id="file-upload-input"
          type="file"
          accept={accept}
          onChange={handleFileChange}
          disabled={uploading}
        />
        <Form.Text className="text-muted">
          Max file size: 10MB
        </Form.Text>
      </Form.Group>

      {selectedFile && (
        <Alert variant="info" className="mb-3">
          Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
        </Alert>
      )}

      <Button
        variant="primary"
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
        className="mb-3"
      >
        {uploading ? (
          <>
            <Spinner animation="border" size="sm" className="me-2" />
            Uploading...
          </>
        ) : (
          'Upload File'
        )}
      </Button>
    </div>
  );
};

export default FileUpload;
