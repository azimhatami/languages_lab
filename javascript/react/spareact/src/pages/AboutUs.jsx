import { Outlet, Link } from "react-router"

import Navbar from '../components/Navbar';


function AboutUs() {
  return(
    <>
      <Navbar />
      <h2>About Us</h2>
      <Link to='programmers'>programmers</Link>
      <Link to='users'>users</Link>
      <Outlet />
    </>
  );
}


export default AboutUs
