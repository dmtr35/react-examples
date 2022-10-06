import React, {useContext} from 'react'
import Context from '../context';

import '../styles/App.css';


const TodoItem = ({todo, index, onChange}) => {
    const {removeTodo} = useContext(Context)
    
    const classes = []

    if (todo.completed) {
        classes.push('done')
    }

    return (
        <li className="li_list">
            <span className={classes.join(' ')}>
                <input 
                    type="checkbox"
                    checked={todo.completed}
                    className='input_list' 
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1 }</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className='rm' onClick={() => removeTodo(todo.id)}>&times;</button>
        </li>
    )
}



export default TodoItem


