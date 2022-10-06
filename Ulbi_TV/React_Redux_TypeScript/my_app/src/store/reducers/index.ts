import { combineReducers } from 'redux'
import { userReducers } from './userReduser'
import { todoReduser } from './todoReducer'


export const rootReducers = combineReducers({
    user: userReducers,
    todo: todoReduser
})


export type RootState = ReturnType<typeof rootReducers>



