
import React from "react"
import { Link } from "react-router-dom"
import styles from "../styles/navbar.module.scss"

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <h1 className={styles.logo}>Accessible Auckland</h1>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/region">Regions</Link>
        <Link to="#">About</Link>
      </div>
    </nav>
  )
}