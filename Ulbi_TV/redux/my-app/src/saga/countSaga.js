import {put, takeEvery} from 'redux-saga/effects'
import {incrementCreator, decrementCreator, ASYNC_INCREMENT, ASYNC_DECREMENT } from '../store/cashReducer'

const delay = (ms) => new Promise(res => setTimeout(res, ms))


function* incrementWorker() {
    yield delay(1000)
    yield put(incrementCreator())
}
function* decrementWorker() {
    yield delay(1000)
    yield put(decrementCreator())
}


export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}





