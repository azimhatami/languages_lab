import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<CoursesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
