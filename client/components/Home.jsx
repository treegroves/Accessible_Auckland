

import React from 'react'
import Carousel from './Carousel.jsx'
import Regions from './Regions'
import styles from '../styles/home.module.scss'


export default function Home() {

  return (
<div>
  <div >
   <img className={styles.backgroundImg} src="/images/homebackground.jpg" alt="" />

      {/* <Carousel />
      <Regions /> */}
    
  </div>
</div>
  )
}
