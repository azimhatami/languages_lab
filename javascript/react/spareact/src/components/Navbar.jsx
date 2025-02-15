import { NavLink } from "react-router-dom";

function Navbar() {
  return(
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/courses'>Courses</NavLink>
    </>
  );
}


export default Navbar
