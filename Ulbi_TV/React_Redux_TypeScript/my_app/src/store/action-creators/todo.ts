import { Dispatch } from "react"
import { TodoActionTypes, TodoAction } from "../../types/todo"
import axios from "axios"





export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({ type: TodoActionTypes.FETCH_TODOS })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TodoActionTypes.FETCH_TODOS_ERROR,
                payload: 'Ошибка при загрузке списка дел'
            })
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.FETCH_TODO_PAGE, payload: page}
}












