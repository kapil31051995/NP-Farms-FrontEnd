import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {Reducer} from '../modules/AppStructuralComponent/redux'

export default combineReducers({
  router: routerReducer,
  Product:Reducer
})
