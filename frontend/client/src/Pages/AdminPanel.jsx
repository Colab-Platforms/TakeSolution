import { useEffect } from 'react';

const AdminPanel = () => {
  useEffect(() => {
    // Redirect to admin app running on port 3000
    window.location.href = 'http://localhost:3000';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '4px solid #f3f3f3',
          borderTop: '4px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto 1rem'
        }}></div>
        <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Redirecting to Admin Panel...</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>
          If not redirected, <a href="http://localhost:3000" style={{ color: '#3498db' }}>click here</a>
        </p>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AdminPanel;
