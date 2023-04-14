import { Link } from 'react-router-dom'
import Styles from './Nav.module.css'
import { SearchBar } from './SearchBar'

export const Nav = ({ onSearch, addRandom, setAccess }) => {
  return (
    <div className={Styles.nav}>
      <button onClick={addRandom} className={Styles.btn}>
        Agregar Random
      </button>
      <Link to='/home' className={Styles.btn}>
        Home
      </Link>
      <Link to='/about' className={Styles.btn}>
        About
      </Link>
      <Link to='/favorites' className={Styles.btn}>
        Favorites
      </Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={() => setAccess(false)}>Logout</button>
    </div>
  )
}
