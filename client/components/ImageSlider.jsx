
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ImageSlider = ({slides})  => {
  const [currentSlide, setCurrentIndex] = useState(0);

  const sliderStyles = {
      height:"100%",
      position:"relative",
    }
  const slideStyles = {
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${slides[currentSlide].url})`,
    }
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
      transform: "translate(0, -50%)",
      right: "32px",
      fontSize: "45px",
      color: "#fff",
      zIndex: 1,
      cursor: "pointer",
    };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",  
    justifyContent: "center",
  }
  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    fontSize: '20px',
  }



  const goToPrevious = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }
  return(

    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>❰</div>
      <div style={rightArrowStyles} onClick={goToNext}>❱</div>
      <a href={slides[currentSlide].link}>
        <div style={slideStyles}></div>
      </a>
      {/* <div style={dotsContainerStyles}>{slides.map((slide, slideIndex) => (
        <div style={dotStyles} onClick={() => goToSlide(slideIndex)} key={slideIndex}>●</div>
        ))}
      </div> */}
    </div>

  )}

export default ImageSlider;