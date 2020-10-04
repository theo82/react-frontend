import React from 'react';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
const MainNavigation = (props) => {
  return (
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
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
