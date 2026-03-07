import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { FiEdit, FiTrash2, FiExternalLink } from 'react-icons/fi';

const DataTable = ({ data, onEdit, onDelete }) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

  // Helper function to get the correct PDF URL
  const getPdfUrl = (pdfUrl) => {
    if (!pdfUrl) return '#';
    // If it's an external URL (starts with http:// or https://), use it directly
    if (pdfUrl.startsWith('http://') || pdfUrl.startsWith('https://')) {
      return pdfUrl;
    }
    // Otherwise, it's a local path, prepend BASE_URL
    return `${BASE_URL}${pdfUrl}`;
  };

  if (data.length === 0) {
    return (
      <div className="text-center py-5 text-muted">
        No data available. Click "Add New" to create an entry.
      </div>
    );
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Year</th>
          <th>Quarter</th>
          <th>Description</th>
          <th>PDF</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.year}</td>
            <td>{item.quarter}</td>
            <td>{item.description}</td>
            <td>
              <a
                href={getPdfUrl(item.pdfUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-primary"
              >
                <FiExternalLink className="me-1" />
                View PDF
              </a>
            </td>
            <td>
              <Button
                variant="warning"
                size="sm"
                className="me-2"
                onClick={() => onEdit(item)}
              >
                <FiEdit />
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDelete(item)}
              >
                <FiTrash2 />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
