
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useState } from 'react';


function BookItem({book}) {
  // console.log(book)
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    setLike(like => !like)
  };
  return(
    <div className='grid grid-cols-[5rem_1fr_3rem] gap-x-5 bg-neutral-800 hover:bg-neutral-800/50 rounded-md'>
      <div className='cols-span-1'>
        <img src={book.image} alt='This is a book.' className='w-full h-full rounded-lg' />
      </div>
      <div className='cols-span-2 flex flex-col gap-y-2 !p-2'>
        <p className='text-xl font-semibold'>{book.title}</p>
        <p className='text-lg text-gray-300/80'>{book.author}</p>
        <div className='!pt-3 flex flex-row items-center gap-x-4'>
          <span className='text-gray-400'>{book.language}</span> |
          <span className='text-gray-400'>{book.pages} pages</span>
        </div>
      </div>
      <div className='cols-span-1 flex items-start justify-center !pt-3 '>
        <button className='cursor-pointer text-red-400' onClick={likeHandler}>
          {
            like ? (
              <GoHeartFill className='w-6 h-6'/>
            ) : (
              <GoHeart className='w-6 h-6'/>
            )
          } 
        </button>
      </div>
    </div>
  );
}


export default BookItem
