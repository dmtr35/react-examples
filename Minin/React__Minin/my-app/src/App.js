import React, {useEffect, useState} from 'react';
import TodoList from './Todo/TodoList';
import Loader from './Todo/Loader';
import Modal from './Modal/Modal';
// import AddTodo from './Todo/AddTodo';
import Context from './context';
import './styles/App.css';

const AddTodo = React.lazy(() => import('./Todo/AddTodo'))

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
  .then(response => response.json())
  .then(todos => {
    setTimeout(() => {
      setTodos(todos)
      setLoading(false)
    }, 2000)
  })
  }, [])

const toggleTodo = (id) => {
  setTodos(
    todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  })
  )
}

function removeTodo(id) {
  setTodos(todos.filter(todo => todo.id !== id))
}

function addTodo(title) {
  setTodos(todos.concat([
    {
    title,
    id: Date.now(),
    completed: false
    }
  ]))
}

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>Working</h1>
        <Modal/>
        <React.Suspense>
          <AddTodo onCreate={addTodo}/>
        </React.Suspense>
        {loading && <Loader/>}
        {todos.length 
        ? <TodoList 
          todos={todos}
          onToggle={toggleTodo}
        />
        : loading ? null : <p>No todos</p>}
      </div>
    </Context.Provider>
  );
}

export default App;
