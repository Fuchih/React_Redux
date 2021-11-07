import { combineReducers } from 'redux'
import countReducer from './count'
import personReducer from './person'

export default combineReducers({
  countData: countReducer,
  personData: personReducer
})
