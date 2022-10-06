import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from '../saga/index'

const sagaMiddleware =createSagaMiddleware()


const rootReducer = combineReducers({
    cashReducer,
    customerReducer,
})









// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)












