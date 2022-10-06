import React from 'react'
import TodoItem from './TodoItem'

import '../styles/App.css';



const TodoList = (props) => {
    return (
        <ul className="lu_list">
            {props.todos.map((todo, index) => {
                return <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    index={index} 
                    onChange={props.onToggle}
                />
            })}
        </ul>
    )
}


export default TodoList





