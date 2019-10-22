import React from 'react';
import { NavLink } from 'react-router-dom'
import './Nav.css';
import PropTypes from 'prop-types';

const Nav = () => {


  return (
    <header>
      <h1 className='header__logo'>Movie<span className='red'>Snag</span></h1>
      <div className='header__nav'>
        <NavLink exact to='/' className='NavLink' activeClassName="selectedLink" >  
          Home
        </NavLink>
        <NavLink exact to='/top-movies' className='NavLink' activeClassName="selectedLink">  
          Top Movies
        </NavLink>
        <NavLink exact to='/coming-soon' className='NavLink' activeClassName="selectedLink">  
          Coming Soon
        </NavLink>
        <NavLink exact to='/favorites' className='NavLink' activeClassName="selectedLink">  
          Favorites
        </NavLink>
      </div>
      <div className='header__user-menu'>user menu with css</div>
    </header>
  )

}


export default Nav;
