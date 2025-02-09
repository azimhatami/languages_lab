import Header from './Header';


function Layout({children, setSearch, search, onSearch}) {
  return(
    <div className='grid grid-cols-[1fr_25rem] grid-rows-[4rem_42rem] gap-8'>
      <Header search={search} setSearch={setSearch} onSearch={onSearch}/>
      {children}
    </div>
  );
}


export default Layout
