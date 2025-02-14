import { createContext, useState } from 'react';

export const UserContext = createContext()

function UserProvider({children}) {
  const [users, setUsers] = useState([
    {id: 1, name: 'Milad'},
    {id: 2, name: 'Mmd'},
    {id: 3, name: 'Ali'},
  ]);
  return(
    <UserContext.Provider value={{users, setUsers}}>
      {children}
    </UserContext.Provider>
  );
}


export default UserProvider
