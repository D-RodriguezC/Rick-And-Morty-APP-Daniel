import axios from 'axios'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Styles from './App.module.css'
import { About } from './components/About.jsx'
import { Cards } from './components/Cards.jsx'
import { Detail } from './components/Detail.jsx'
import Favorites from './components/Favorites'
import { Form } from './components/Form'
import { Nav } from './components/Nav.jsx'
import { removeFav } from './redux/actions'

function App({ removeFav }) {
  const [characters, setCharacters] = useState([])
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [access, setAccess] = useState(false)

  const login = async (userData) => {
    try {
      const { email, password } = userData
      const { data } = await axios(
        `http://localhost:3001/login?email=${email}&password=${password}`
      )
      const { access } = data
      setAccess(access)
      access && navigate('/home')
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access, navigate])

  const onSearch = async (id) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      )
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data])
      }
    } catch (error) {
      alert('¡No hay personajes con este ID!')
    }
  }

  const onClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id))
    removeFav(id)
  }

  const addRandom = () => {
    const randomChar = Math.ceil(Math.random() * 825)
    onSearch(randomChar)
  }
  return (
    <div className={Styles.App}>
      {pathname !== '/' && (
        <Nav onSearch={onSearch} addRandom={addRandom} setAccess={setAccess} />
      )}
      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route
          path='/home'
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route
          path='*'
          element={<h1 style={{ color: 'red' }}>Error 404 Page Not Found</h1>}
        />
        <Route path='/favorites' element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  )
}

const mapDispatchToProps = {
  removeFav,
}

export default connect(null, mapDispatchToProps)(App)
