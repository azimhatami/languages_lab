import { useEffect, useState } from 'react';

// import axios from 'axios';
import api from './services/config';
import Post from './components/Post';
import Delete from './components/Delete';
import Put from './components/Put';
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
   //  axios.get('https://jsonplaceholder.typicode.com/todos')
      // .then((response) => setTodos(response.data))
    api.get('/todos').then((res) => console.log(res))
    
    // Simultaneous Request
//    axios.all([
//      axios.get('https://jsonplaceholder.typicode.com/todos'),
//      axios.get('https://jsonplaceholder.typicode.com/posts'),
//      axios.get('https://jsonplaceholder.typicode.com/users'),
//    ]).then(axios.spread((todos, posts, users) => {
//      console.log('todos', todos);
//      console.log('posts', posts);
//    }))
  }, [])

  return (
    <>
      <h2>Axios</h2>
    {/*<div>
        {todos.map((todo) => {
          return(
            <p key={todo.id}>{todo.title}</p>
          );
        })}
      </div>
      <Post />
      <Delete />*/}
      <Put />
    </>
  )
}

export default App
