import React from 'react';
import { BrowserRouter, Route, Routes, NavLink, } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';
import TodosPage from './components/TodoPage';

const App = () => {

  return (
    <BrowserRouter>
      <div>
      <NavLink to="/users">Пользователи</NavLink>
      <NavLink to="/todos">Список дел</NavLink>
      </div>
      <Routes>
        <Route element={<UsersPage />} path='/users' />
        <Route element={<UserItemPage />} path='/users/:id' />
        <Route element={<TodosPage />} path='/todos' />
        <Route element={<TodoItemPage />} path='/todos/:id' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;