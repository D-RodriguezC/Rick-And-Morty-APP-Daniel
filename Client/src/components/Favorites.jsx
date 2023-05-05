import { connect, useDispatch } from 'react-redux'
import { filterCards, orderCards } from '../redux/actions'
import { Cards } from './Cards'

const Favorites = ({ myFavorites, onClose }) => {
  const dispatch = useDispatch()

  const handleOrder = (ev) => {
    const { value } = ev.target
    dispatch(orderCards(value))
  }

  const handleFilter = (ev) => {
    const { value } = ev.target
    dispatch(filterCards(value))
  }

  return (
    <>
      <select name='order' onChange={handleOrder}>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>

      <select name='filter' onChange={handleFilter}>
        <option value='All'>All</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>unknown</option>
      </select>

      <Cards characters={myFavorites} onClose={onClose} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, null)(Favorites)
