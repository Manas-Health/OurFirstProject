

import React,{useContext} from 'react';
import { NavLink, useLocation,Link} from 'react-router-dom';
import '../Css/home.css'
import '../Css/index.css'
import '../Css/Nav.css'
import ContextApi from './ContextApi';

const Nav = () => {
  const location = useLocation();
  const { setTokens } = useContext(ContextApi);

  // List of routes where the navbar should be hidden
  const hideNavbarRoutes = ['/teacherhome','/studentlogin','/teacherlogin','/','/stu','/reports','/doctors','/forgot']

  // Check if the current route is in the list of routes to hide the navbar
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  if (shouldHideNavbar) {
    return null; // Return null to hide the navbar
  }
  
  return (
    <div className={`nav `}>
      <Link to='/home'><h3>Manas Health</h3></Link>
      <ul className='ul'>
        <div className="innerdiv">
          <NavLink className='vis' to="/profile">
            <li className='li'>Profile</li>
          </NavLink>
          <NavLink className='vis' to="/home">
            <li className='li'>Home</li>
          </NavLink>
          <NavLink className='vis' to="/about">
            <li className='li'>About Us</li>
          </NavLink>
          <button className='logout' onClick={() => { setTokens({token: null }),localStorage.removeItem('user') }}><img id="img4" src="https://cdn-icons-png.flaticon.com/128/10405/10405584.png" alt="test" height={20} width={20} />Logout</button>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
