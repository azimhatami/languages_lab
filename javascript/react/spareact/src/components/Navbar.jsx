import { NavLink } from "react-router-dom";

function Navbar() {
  return(
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/courses'>Courses</NavLink>
      <NavLink to='/products'>Productss</NavLink>
    </>
  );
}


export default Navbar
