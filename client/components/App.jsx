import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import Regions from './Regions'
import Locations from './Locations'
import Location from './Location'
import AddLocationForm from './AddLocationForm'
import Carousel from './Carousel.jsx'
import Home from './Home'

function App() {
  return (
    <>
     
        <Navbar />
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region" element={<Regions />} />
          <Route path="/region/:regionId/:id" element={<Locations />} />
          <Route path="/region/:regionId/:id/:name" element={<Location />} />
          <Route path="/addlocation" element={<AddLocationForm />} />
        </Routes>
      
    </>
  )
}

export default App
