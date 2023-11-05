import React, { useState } from 'react';
import './SlideShow.css';

const SlideShow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="slideshow">
      <div className="slide">
        <div className="overlay"></div>
        <img src={currentSlide.image} alt={currentSlide.title} />
        <h1>{currentSlide.title}</h1>
        <h3>{currentSlide.description}</h3>
        <p>{currentSlide.comment}</p>
      </div>
      <div className="buttons">
        <button onClick={previousSlide}
            className='priv-button'
        >
            <span>P</span>
            <span>r</span>
            <span>i</span>
            <span>v</span>
        </button>
        <button onClick={nextSlide}
            className='next-button'
        >
            <span>N</span>
            <span>e</span>
            <span>x</span>
            <span>t</span>
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
