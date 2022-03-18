import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
      <>
    <div className=''>
      <nav className="navbar navbar-expand-sm bg-primary navbar-light">
  <ul className="navbar-nav">
    <li className="nav-item ">
      <Link to="/" className="nav-link" >Home</Link>
    </li>
    <li className="nav-item">
      <Link  to="/Contacts" className="nav-link">Contacts</Link>
    </li>
    <li className="nav-item">
      <Link to="/About" className="nav-link" >About</Link>
    </li>
  </ul>
  <Link to="/AddUser" className='btn btn-outline-light'>AddUser</Link>
</nav>
    </div>
    </>
  )
}

export default NavBar;
