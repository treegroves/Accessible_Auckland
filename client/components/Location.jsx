import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/locations.module.scss'
import { fetchLocations } from '../actions'

export default function Location() {
 const locations = useSelector((state) => state.locations)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLocations())
  }, [])

  const params = useParams()
  const locationId = params.name

  const locationArr = locations.filter((location) => {
    return location.name == locationId
  })
console.log(locationArr)
  return (
    <>
      <div  className={styles.locationContainer}>
          <ul className={styles.locationContainer}>
          {locationArr?.map((location) => (
            <li key={location.id}>
              <img src={location.image} alt="" />
              <div><h2>{location.name}</h2></div>
              <div><h4>About:</h4>{location.description}</div>
              <div><h4>Location:</h4>{location.address}</div>
              <div><h4>Opening Hours:</h4>{location.openingHours}</div>
              <div><h4>Website:</h4><a href={location.websiteUrl} target="_blank" rel="noreferrer">
                 aucklandmuseum.com
              </a></div>

            <div>
                <h4>Facilities:</h4>
                {location.wheelchairCompatible == 1 ? <p>Wheelchair Accessible: <span className={styles.tick} alt="Yes">&#10003;</span></p> : <p>Wheelchair Accessibility: <span className={styles.cross} alt="No">&#10005;</span></p>}

                {location.ramps == 1 ? <p>Ramps: <span className={styles.tick} alt="Yes">&#10003;</span></p> : <p>Ramps: <span className={styles.cross} alt="No">&#10005;</span></p>}

                {location.elevator == 1 ? <p>Elevator: <span className={styles.tick} alt="Yes">&#10003;</span></p> : <p>Elevator: <span className={styles.cross} alt="No">&#10005;</span></p>}
              
                {location.accessibleToilets == 1 ? <p>Accessible Toilets: <span className={styles.tick} alt="Yes">&#10003;</span></p> : <p>Accessible Toilets: <span className={styles.cross} alt="No">&#10005;</span></p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

