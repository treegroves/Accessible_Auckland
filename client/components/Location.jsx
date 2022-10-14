import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/location.module.scss'
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
      <div >
          
          {locationArr?.map((location) => (
            <div className={styles.locationContainer} key={location.id}>
              <img src={location.image} alt="" />
              <h1>{location.name}</h1>
                <section className={styles.infoContainer}>
                  <div className={styles.locationInfo}>
                    <div>
                      
                    </div>
                    <div>
                      <h4>About:</h4>
                      <p>{location.description}</p>
                    </div>
                    <div>
                      <h4>Location:</h4>
                      <p>{location.address}</p>
                    </div>
                    <div>
                      <h4>Opening Hours:</h4>
                      <p>{location.openingHours}</p>
                    </div>
                    <div>
                      <h4>Website:</h4>
                      <a href={location.websiteUrl} target="_blank" rel="noreferrer">
                      {location.websiteUrl}
                      </a>
                    </div>
                  </div>

                  <div className={styles.facilitiesCard}>
                    <h4>Facilities:</h4>
                    {location.wheelchairCompatible == 1 ? <p>Wheelchair Accessible: <span className={styles.tick} alt="Yes">&#10003;</span></p> : <p>Wheelchair Accessibility: <span className={styles.cross} alt="No">&#10005;</span></p>}

                    {location.ramps == 1 ? <p>Ramps: <span className={styles.tick} alt="Yes">&#10003;</span></p> : <p>Ramps: <span className={styles.cross} alt="No">&#10005;</span></p>}

                    {location.elevator == 1 ? <p>Elevator: <span className={styles.tick} alt="Yes">&#10003;</span></p> : <p>Elevator: <span className={styles.cross} alt="No">&#10005;</span></p>}
                  
                    {location.accessibleToilets == 1 ? <p>Accessible Toilets: <span className={styles.tick} alt="Yes">&#10003;</span></p> : <p>Accessible Toilets: <span className={styles.cross} alt="No">&#10005;</span></p>}
                  </div>
              </section>
            </div>
          ))}
        
      </div>
    </>
  )
}

