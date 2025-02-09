import { useState } from 'react';
import { books as booksData } from './constants/mockData';

import Header from './components/Header';
import BooksList from './components/BooksList';
import Favorites from './components/Favorites';
import Layout from './components/Layout';


function App() {
  const [books, setBooks] = useState(booksData);
  const [likedList, setLikedList] = useState([]);
  const [search, setSearch] = useState('');

  const handleLikedList = (book, status) => {
    // console.log({book, status})
    if (status) {
      const newLikedList = likedList.filter((item) => {
        return(
          item.id !== book.id
        );
      });
      setLikedList(newLikedList)
    } else {
      setLikedList((likedList) => [...likedList, book])
    } 
  };

  const searchHandler = () => {
    if (search) {
      const newBooksData = booksData.filter((b) => b.title.toLowerCase().includes(search))
      setBooks(newBooksData);
      console.log('newBook', newBooksData);
    } else {
      setBooks(booksData)
      console.log('Book', booksData);
    }
  };

  return (
      <Layout search={search} setSearch={setSearch} onSearch={searchHandler}>
        <BooksList handleLikedList={handleLikedList} books={books}/>
        <Favorites likedList={likedList} />
      </Layout>
  )
}

export default App
