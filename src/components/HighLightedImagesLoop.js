// HighlightedImagesLoop.js
import React, { useState, useEffect } from 'react';
// import './HighlightedImagesLoop.css'; // Import the CSS for styling

const HighlightedImagesLoop = ({ images }) => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const loopInterval = setInterval(() => {
      setHighlightIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Adjust the interval (in milliseconds) between highlights

    return () => clearInterval(loopInterval);
  }, [images.length]);

  return (
    <div className="image-group-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`image ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleClick(index)}
          //className={index === highlightIndex ? 'highlighted' : ''}
        />
      ))}
    </div>
  );
};

export default HighlightedImagesLoop;
