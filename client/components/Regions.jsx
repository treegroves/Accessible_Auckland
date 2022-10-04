import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/regions.module.scss'
import { fetchRegions } from '../actions'

function Regions() {
  const regions = useSelector((state) => state.regions)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRegions())
  }, [])

  return (
   
      <div className={styles.container}>
        {regions?.map((region) => (
          <div
            className={styles.regionImgGrid}
            key={region.id}
            src={region.region_name}
          >

            <div className={styles.regionCard}>
              <p>{region.region_name} Auckland</p>
              <Link to={`/region/${region.region_name}/${region.id}`}>
                <img
                src={region.images}
                
                alt="..."
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    
  )
}

export default Regions
