import { useState, useEffect } from 'react';
import { boardOfDirectorsAPI } from '../../services/api';

const BoardOfDirectors = () => {
  const [loading, setLoading] = useState(false);
  const [apiImages, setApiImages] = useState([]);

  useEffect(() => {
    fetchBoardImages();
  }, []);

  const fetchBoardImages = async () => {
    setLoading(true);
    try {
      const response = await boardOfDirectorsAPI.getAll();
      if (response.data.success && response.data.data.length > 0) {
        setApiImages(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching board of directors images:', error);
    } finally {
      setLoading(false);
    }
  };

  const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

  // Hardcoded images as fallback
  const hardcodedBoardImages = [
    '/assets/investordata/Boardofdirector/bod1.png',
    '/assets/investordata/Boardofdirector/bod2.png',
    '/assets/investordata/Boardofdirector/bod3.png'
  ];

  // Use API images if available, otherwise fallback to hardcoded
  const boardImages = apiImages.length > 0
    ? apiImages.map(item => `${BASE_URL}${item.imageUrl}`)
    : hardcodedBoardImages;

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="board-of-directors" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h2>Board of Directors</h2>
      <div className="board-images-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
        {boardImages.map((image, index) => (
          <div key={index} className="board-image-wrapper" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img 
              src={image} 
              alt={`Board of Directors ${index + 1}`}
              className="board-image"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoardOfDirectors


