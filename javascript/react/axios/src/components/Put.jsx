import { useState } from 'react';

import axios from 'axios';

function Put() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');

  const updateHandler = () => {
    // axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, { title })
      // .then((response) => console.log(response))
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {title})
      .then((response) => console.log(response))
  };
  return(
    <>
      <input 
        type='text' 
        placeholder='pls enter the Id..' 
        value={id}
        onChange={(event) => {setId(event.target.value)}}
      />
      <input 
        type='text' 
        placeholder='pls enter the title..' 
        value={title}
        onChange={(event) => {setTitle(event.target.value)}}
      />
      <button onClick={updateHandler}>Update</button>
    </>
  );
}


export default Put
