import { useState } from 'react';

import axios from 'axios';

function Post() {
  const [title, setTitle] = useState('');

  const postHandler = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', { title }).then((response) => console.log(response))
  };
  return(
    <>
      <input 
        type='text' 
        placeholder='pls enter the title..' 
        value={title}
        onChange={(event) => {setTitle(event.target.value)}}
      />
      <button onClick={postHandler}>Add</button>
    </>
  );
}


export default Post
