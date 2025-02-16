import { useState } from 'react';

import axios from 'axios';

function Delete() {
  const [id, setId] = useState('');

  const deleteHandler = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
}


export default Delete
