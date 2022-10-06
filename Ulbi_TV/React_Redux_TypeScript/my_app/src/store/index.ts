import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducers } from './reducers/index'







export const store = createStore(rootReducers, applyMiddleware(thunk))

















