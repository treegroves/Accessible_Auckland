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
          <ul
            className={styles.regionImgGrid}
            key={region.id}
            src={region.region_name}
          >
            <li>
              <h2>{region.region_name} Auckland</h2>
              <Link to={`/region/${region.region_name}/${region.id}`}>
                <img
                src={region.images}
                
                alt="..."
                />
              </Link>
            </li>
          </ul>
        ))}
      </div>
    
  )
}

export default Regions
