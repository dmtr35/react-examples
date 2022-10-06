const defaultState = {
    customers: []
}

const ADD_CUSTOMER = "ADD_CUSTOMER"
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
const ADD_MANY_COSTOMERS = "ADD_MANY_COSTOMERS"

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_COSTOMERS:
            return { ...state, customers: [...state.customers, ...action.payload] }
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload] }
        case REMOVE_CUSTOMER:
            return { ...state, customers: state.customers.filter(customers => customers.id !== action.payload) }
        default:
            return state
    }
} 

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_COSTOMERS, payload})











