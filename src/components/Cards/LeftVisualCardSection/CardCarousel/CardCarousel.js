// Carousel.js
import React, { useEffect, useState } from 'react';
import './CardCarousel.css';
import GenericCard from '../../GenericCard';

const CardCarousel = ({ items, setActiveCardId, isActiveCardFreeze }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index, item) => {
    setCurrentIndex(index);
    setActiveCardId(item.id);
  };

  useEffect(() => {
    if(currentIndex === items.length){
      setCurrentIndex(items.length-1);
    }
    // eslint-disable-next-line
  }, [items]);

  return (
    <div className="carousel">
      <div className="carousel-content">
        {items?.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <GenericCard data={item} isActiveCardFreeze={isActiveCardFreeze}/>
          </div>
        ))}
      </div>
      <div className="dots">
        {items?.map((item, index) => (
          <span
            key={item.id}
            className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
            onClick={() => handleDotClick(index, item)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
