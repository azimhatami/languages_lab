function FavoriteBook({ likedList }) {
  return(
    <>
      {
        !!likedList.length && (likedList.map((itm) => {
          return(
            <div key={itm.id} className='flex items-start gap-x-8 bg-red-500/40 !p-2 rounded-lg'>
              <img src={itm.image} alt='This is a book.' className='w-8 rounded-md'/>
              <p className='font-semibold'>{itm.title}</p>
            </div>
          )}))
      }
    </>
  );
}


export default FavoriteBook
