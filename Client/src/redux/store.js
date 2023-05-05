import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
// esta linea sirve para conectar nuestra APP con la extension redux devtool del navegador

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunkMiddleware)) // esta linea sive para que podamos hacer peticiones a una api
)

export default store
