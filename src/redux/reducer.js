import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from '../redux/actions'

const initialState = {
  myFavorites: [],
  allCharacters: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      }
    case REMOVE_FAV:
      return {
        myFavorites: state.myFavorites.filter(
          (personaje) => personaje?.id !== +action.payload
        ),
        allCharacters: state.allCharacters.filter(
          (personaje) => personaje?.id !== +action.payload
        ),
      }
    case FILTER:
      if (action.payload === 'All')
        return { ...state, myFavorites: [...state.allCharacters] }
      return {
        ...state,
        myFavorites: [
          ...state.allCharacters.filter((character) => {
            return character.gender === action.payload
          }),
        ],
      }
    case ORDER:
      if (action.payload === 'A') {
        return {
          ...state,
          myFavorites: [...state.allCharacters.sort((a, b) => a.id - b.id)],
        }
      }
      if (action.payload === 'D') {
        return {
          ...state,
          myFavorites: [...state.allCharacters.sort((a, b) => b.id - a.id)],
        }
      }
      return { ...state }
    default:
      return { ...state }
  }
}

export default reducer
