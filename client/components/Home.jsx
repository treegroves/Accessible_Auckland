

import React from 'react'
import Carousel from './Carousel.jsx'
import Regions from './Regions'
import styles from '../styles/home.module.scss'


export default function Home() {

  return (
<div className={styles.container}>
  <div>
    <div className={styles.intro}>
      <h2>Accessible Auckland</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptate adipisci repellat et, sunt, autem ex asperiores eaque sit voluptates nemo similique unde ratione cumque! Doloremque expedita nostrum similique soluta.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptate adipisci repellat et, sunt, autem ex asperiores eaque sit voluptates nemo similique unde ratione cumque! Doloremque expedita nostrum similique soluta.</p>
      <button>Get Started</button>
    </div>
  

      {/* <Carousel />
      <Regions /> */}
    
  </div>
  <div className={styles.imageContainer}>
      <img src="/images/homebackground.jpg" alt="" />
    </div>
</div>
  )
}
