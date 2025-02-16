import { NavLink } from "react-router-dom";

function Navbar() {
  return(
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/courses'>Courses</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/about-us'>About us</NavLink>
    </>
  );
}


export default Navbar
