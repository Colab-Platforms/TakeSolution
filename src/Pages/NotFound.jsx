import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '6rem', margin: '0', color: '#333' }}>404</h1>
      <h2 style={{ fontSize: '2rem', margin: '20px 0', color: '#666' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '30px' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        style={{
          padding: '12px 30px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '1rem'
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
