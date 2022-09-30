import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocations } from '../actions'
import ImageSlider from "./ImageSlider"






export default function Carousel() {

  //   const locations = useSelector((state) => state.locations)
  //   const dispatch = useDispatch()
  //   useEffect(() => {
  //     dispatch(fetchLocations())
  //   }, [])

  // const locationArr = locations.filter((location) => {
  //   return location.id == 1 || 2 || 3 
  // })
  const slides = [
    // { url: locationsArr[].image, title: "beach", link: "https://raw.githubusercontent.com/monsterlessonsacademy/monsterlessonsacademy/221-react-image-slider/public/image-3.jpg" },
    { url: "/images/museum.jpg", title: "Auckland Museum", link: "/region/undefined/1/Auckland%20Museum" },
    { url: "/images/skytower.jpg", title: "Sky Tower", link: "/region/undefined/2/Sky%20Tower" },
    { url: "/images/teuru.jpg", title: "Te Uru", link: "/region/undefined/4/Te%20Uru%20Waitakere%20Contemporary%20Gallery" },
    { url: "/images/botanical.jpg", title: "Auckland Botanic Garden", link: "/region/undefined/3/Auckland%20Botanic%20Gardens" },]

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
