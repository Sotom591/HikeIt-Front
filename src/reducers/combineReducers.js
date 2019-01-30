import { combineReducers } from 'redux'
import itemsFormInputReducer from './itemsFormInputReducer'
import listFormInputReducer from './listFormInputReducer'


const rootReducer = combineReducers({
  items: itemsFormInputReducer,
  lists: listFormInputReducer
})

export default rootReducer
