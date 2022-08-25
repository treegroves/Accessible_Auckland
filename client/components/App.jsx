import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import Regions from './Regions'
import Locations from './Locations'
import Location from './Location'
import AddLocationForm from './AddLocationForm'

function App() {
  return (
    <>
     
        <Navbar />
        <Routes>
          <Route path="/" element={<Regions />} />
          <Route path="region/:region_name/:id" element={<Locations />} />
          <Route path="region/:region_name/:id/:name" element={<Location />} />
          <Route path="/addlocation" element={<AddLocationForm />} />
        </Routes>
      
    </>
  )
}

export default App
