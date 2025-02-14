import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Form() {
  const {users, setUsers} = useContext(UserContext);
  const [name, setName] = useState('');

  const AddUserHandler = () => {
    setUsers([...users, {id: Math.random() * 100, name}])
  };

  return(
    <>
      <input type='text' placeholder='Name..' value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={AddUserHandler}>Add</button>
    </>
  );
}


export default Form
