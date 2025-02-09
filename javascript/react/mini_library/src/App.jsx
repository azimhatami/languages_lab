import Header from './components/Header';
import BooksList from './components/BooksList';
import Favorites from './components/Favorites';


function App() {

  return (
    <div className='grid grid-cols-[1fr_25rem] grid-rows-[3rem_45rem] gap-8'>
      <Header /> 
      <BooksList />
      <Favorites />
    </div>
  )
}

export default App
