import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






// import React, { useEffect, useState } from 'react';
// import Card, { CardVariant } from './components/Card';
// import UserList from './components/UserList';
// import UserItem from './components/UserItem';
// import {IUser, ITodo} from './types/types';
// import axios from 'axios';
// import List from './components/List';

// const App = () => {
//   const [users, setUsers] = useState<IUser[]>([])
//   const [todos, setTodos] = useState<ITodo[]>([])

//   useEffect(() => {
//     fetchUsers()
//     fetchTodos()
//   }, [])

//   async function fetchUsers() {
//     try {
//       const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//       setUsers(response.data)
//     } catch (e) {
//       alert(e)
//     }
//   }
//   async function fetchTodos() {
//     try {
//       const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
//       setTodos(response.data)
//       console.log(response.data)
//     } catch (e) {
//       alert(e)
//     }
//   }



//   return (
//     <div className="app">
//       <Card onClick={(num: number) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
//         <button>Кнопка</button>
//       </Card>
//       <List
//         items = {users}
//         renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
//       />
//     </div>
//   );
// }

// export default App;