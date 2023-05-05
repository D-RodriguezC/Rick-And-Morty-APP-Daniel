import { Link } from 'react-router-dom'
import Styles from './Card.module.css'

import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addFav, removeFav } from '../redux/actions'

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    if (isFav) removeFav(id)
    else addFav({ id, name, status, species, gender, origin, image, onClose })
    setIsFav(!isFav)
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true)
      }
    })
  }, [myFavorites, id])

  return (
    <div className={Styles.card}>
      {isFav ? (
        <button onClick={handleFavorite} className={Styles.favorite}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={Styles.favorite}>
          🤍
        </button>
      )}
      <button onClick={() => onClose(+id)} className={Styles.btn}></button>
      <img src={image} alt={name} title={name} className={Styles.img} />
      <Link to={`/detail/${id}`}>
        <h2 className={Styles.name}>{name}</h2>
      </Link>
      <div className={Styles.info}>
        {/* <h2>{status}</h2> */}
        <h2>{species}</h2>
        <h2>{gender}</h2>
        {/* <h2>{origin}</h2> */}
      </div>
    </div>
  )
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFav: (personaje) => dispatch(addFav(personaje)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   }
// }

const mapDispatchToProps = {
  addFav,
  removeFav,
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
