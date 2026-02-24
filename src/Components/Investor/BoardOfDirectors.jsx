const BoardOfDirectors = () => {
  const boardImages = [
    '/assets/investordata/Boardofdirector/bod1.png',
    '/assets/investordata/Boardofdirector/bod2.png',
    '/assets/investordata/Boardofdirector/bod3.png'
  ];

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
