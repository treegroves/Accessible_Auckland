import React, { useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/locations.module.scss'

import { fetchLocations } from '../actions'

function Locations() {
  const navigate = useNavigate()
  const locations = useSelector((state) => state.locations)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLocations())
  }, [])

  const params = useParams()
  const regionId = params.id

  const locationArr = locations.filter((location) => {
    return location.regionId == regionId
  })
  return (
    <>
      <div >
        <ul className={styles.locationContainer}>
          {locationArr?.map((location) => (
           
            <li key={location.id} >
            
              <img src={location.image} alt="Auckland Museum" onMouseDown={() => navigate(`/region/${location.regionName}/${location.id}/${location.name}`)} role="button" />
             
              <div><h2>{location.name}</h2></div>
              <div><h4>About:</h4>{location.description}</div>
              <div><h4>Location:</h4>{location.address}</div>
              
            </li>
            
          ))}
        </ul>
        {/* <Link to={`/addlocation`}>
          <button>Add Location</button>
        </Link> */}
      </div>
    </>
  )
}

export default Locations
