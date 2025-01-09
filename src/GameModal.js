import React, { useState } from 'react';

function GameModal({ game, onClose }) {
  const images = [
    'path/to/game-image1.jpg',
    'path/to/game-image2.jpg',
    'path/to/game-image3.jpg',
    // Add images for the carousel
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="game-modal">
      <div className="modal-content">
        <h2>{game.title}</h2>
        <div className="carousel">
        <button onClick={handlePrev} className="carousel-btn">
  <i className="fas fa-chevron-left"></i> {/* Left Arrow */}
</button>
          <img src={images[currentIndex]} alt={`Game image ${currentIndex + 1}`} />
          <button onClick={handleNext} className="carousel-btn">
  <i className="fas fa-chevron-right"></i> {/* Right Arrow */}
</button>
        </div>
        {currentIndex === images.length - 1 && (
          <div className="youtube-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/example-video-id"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}
        <a href="path/to/game-download" className="download-link">Download Game</a>
        <button className="close-btn" onClick={onClose}>
  <i className="fas fa-times"></i> {/* Font Awesome "X" icon */}
</button>

      </div>
    </div>
  );
}

export default GameModal;
