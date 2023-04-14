import { useState } from 'react'
import Styles from './SearchBar.module.css'

export function SearchBar({ onSearch }) {
  const [id, setId] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setId(value)
  }

  return (
    <div>
      <input
        type='search'
        onChange={handleChange}
        value={id}
        className={Styles.input}
        placeholder='Inserta un número'
      />
      <button onClick={() => onSearch(+id)} className={Styles.btn}>
        Agregar
      </button>
    </div>
  )
}
