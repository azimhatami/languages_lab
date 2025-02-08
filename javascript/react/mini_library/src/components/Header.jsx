function Header() {
  return(
    <div className='container flex items-center justify-between bg-neutral-700/70 !p-2 h-13 rounded-lg !px-6'>
      <h1 className='font-semibold leading-9'>Mini Library</h1>
      <div className='flex items-center gap-x-4'>
        <input type='text' placeholder='Search item...' className='bg-neutral-800 border-1 border-neutral-500 rounded-lg text-neutral-300 !p-1 w-68 outline-none font-semibold'/>
        <button className='bg-gray-600 w-20 h-7.5 rounded-lg font-semibold text-neutral-300/80 cursor-pointer outline-none'>Search</button>
      </div>
    </div>
  );
}

export default Header;
