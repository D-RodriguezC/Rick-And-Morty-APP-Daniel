import { useState } from 'react'
import { validation } from '../validation.js'
import Styles from './Form.module.css'

export const Form = ({ login }) => {
  const [userData, setUserData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(validation(userData))
    login(userData)
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className={Styles.form}>
      {<h2>{errors.validEmail}</h2>}
      <label htmlFor='email'>EMAIL</label>
      <input
        type='email'
        id='email'
        name='email'
        autoComplete='email'
        value={userData.email}
        onChange={handleChange}
      />

      {<h2>{errors.validPassword}</h2>}
      <label htmlFor='password'>PASSWORD</label>
      <input
        type='password'
        id='password'
        name='password'
        autoComplete='current-password'
        value={userData.password}
        onChange={handleChange}
      />

      <button>SUBMIT</button>
    </form>
  )
}
