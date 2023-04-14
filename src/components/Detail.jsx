import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Styles from './Detail.module.css'

export const Detail = () => {
  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setCharacter(data)
      })
      .catch(() => window.alert('¡No hay personajes con este ID!'))
    return setCharacter({})
  }, [id])

  return (
    <div className={Styles.container}>
      <div className={Styles.info}>
        <h1>{character.name}</h1>
        <h3>Status | {character.status}</h3>
        <h3>Gender | {character.gender}</h3>
        <h3>SPECIE | {character.species}</h3>
        <h3>ORIGIN | {character.origin?.name}</h3>
      </div>
      <div className={Styles.image}>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  )
}
