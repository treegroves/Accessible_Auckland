
import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from "../styles/navbar.module.scss"
import { useDispatch } from "react-redux"
import { searchLocations } from '../actions'
import { BsSearch } from "react-icons/bs"



export default function Navbar() {
const navigate = useNavigate()

const [search, setSearch] = useState('')
const dispatch = useDispatch()
function handleSubmit(event) {
  event.preventDefault()
  dispatch(searchLocations(search))
  setSearch('')
  navigate(`/results`)
  // navigate(`/region/${location.regionId}/${location.id}/${search}`)
console.log("hello" + location.id)
}

  return (
    <nav id="navbar" className={styles.navContainer}>
      <h1 className={styles.logo}>Accessible Auckland</h1>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/region">Regions</Link>
        <Link to="#">About</Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Search"
            name = "search"
            value={search}
            onChange={(event) => setSearch(event.target.value) } />

          <button>
            <BsSearch />
          </button>
        </form>
      </div>
    </nav>
  )
}