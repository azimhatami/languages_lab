import { books } from '../constants/mockData';
import BookItem from './BookItem';


function BooksList() {
  return(
    <div className='col-span-1 bg-neutral-700/70 rounded-md !p-4 flex flex-col gap-y-4 overflow-y-auto scrollbar'>
      {
        books.map((book) => {
          return(
            <BookItem key={book.id} book={book}/>
          );
        })
      }
    </div>
  );
}


export default BooksList
