import React from 'react'

import ImageSlider from "./ImageSlider"

export default function Carousel() {
  const slides = [
    { url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-1.jpg", title: "beach" },
    { url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-2.jpg", title: "boat" },
    { url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-3.jpg", title: "forest" },
    { url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-4.jpg", title: "city" },
    { url: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-5.jpg", title: "italy" },]

  const containerStyles = {
    width: "100%",
    height: "480px",
    margin: "0 auto",
  }

  return (
    <div>
      <div style={containerStyles}>
            <ImageSlider slides={slides} />
      </div>
    </div>
  )
}
