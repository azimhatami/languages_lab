import Header from './Header';


function Layout({children}) {
  return(
    <div className='grid grid-cols-[1fr_25rem] grid-rows-[4rem_42rem] gap-8'>
      <Header />
      {children}
    </div>
  );
}


export default Layout
