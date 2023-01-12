import { createStore, combineReducers } from 'redux'
import { adlarReducer } from './adReducer'

export default createStore(adlarReducer);
