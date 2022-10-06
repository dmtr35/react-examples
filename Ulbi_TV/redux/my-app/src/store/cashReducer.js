const defaultState = {
    cash: 5,
}

export const INCREMENT = "INCREMENT"
export const ASYNC_INCREMENT = "ASYNC_INCREMENT"

export const DECREMENT = "DECREMENT"
export const ASYNC_DECREMENT = "ASYNC_DECREMENT"

export const ADD_CASH = "ADD_CASH"
export const GET_CASH = "GET_CASH"


export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, cash: state.cash + 1 }
        case DECREMENT:
            return { ...state, cash: state.cash - 1 }

        case ADD_CASH:
            return { ...state, cash: state.cash + action.payload }
        case GET_CASH:
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}


export const incrementCreator = () => ({ type: INCREMENT })
export const asyncIncrementCreator = () => ({ type: ASYNC_INCREMENT })

export const decrementCreator = () => ({ type: DECREMENT })
export const asyncDecrementCreator = () => ({ type: ASYNC_DECREMENT })

export const addCashAction = (payload) => ({ type: ADD_CASH, payload })
export const getCashAction = (payload) => ({ type: GET_CASH, payload })








