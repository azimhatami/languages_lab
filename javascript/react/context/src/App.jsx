import UserPage from './components/UsersPage';
import UserProvider from './context/UserContext';

import './App.css'

function App() {
  return (
    <>
      <UserProvider>
        <UserPage />
      </UserProvider>
    </>
  )
}

export default App
