import { UserContext } from '../context/UserContext';
import { useContext } from 'react';


function UsersList() {
  const { users } = useContext(UserContext);
  console.log(users)
  return(
    <>
      {users.map((user) => <p key={user.id}>{user.name}</p>)}
    </>
  );
}


export default UsersList;
