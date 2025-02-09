import FavoriteBook from './FavoriteBook';


function Favorites({likedList}) {
  return(
    <div className='col-span-1 bg-rose-300 rounded-md !p-4 flex flex-col gap-y-3'>
      <FavoriteBook likedList={likedList} />
    </div>
  );
}


export default Favorites
