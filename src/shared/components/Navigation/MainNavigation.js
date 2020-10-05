import React from 'react';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <SideDrawer>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className='main-navigation__menu-btn'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className='main_navigation__title'>
          <Link to='/'></Link>YourPlaces
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;