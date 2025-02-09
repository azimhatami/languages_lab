import { useState } from 'react';

import Header from './components/Header';
import BooksList from './components/BooksList';
import Favorites from './components/Favorites';
import Layout from './components/Layout';


function App() {

  const [likedList, setLikedList] = useState([]);

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

  return (
      <Layout>
        <BooksList handleLikedList={handleLikedList} />
        <Favorites likedList={likedList} />
      </Layout>
  )
}

export default App
