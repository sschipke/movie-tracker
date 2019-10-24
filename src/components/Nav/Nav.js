import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';
import PropTypes from 'prop-types';
import avatar from '../../images/user-avatar.svg'
const Nav = ({user}) => {


  return (
    <header>
      <h1 className='header__logo'>Movie<span className='red'>Snag</span></h1>
      <div className='header__nav'>
        <NavLink exact to='/' className='NavLink' activeClassName="selectedLink" >  
          Home
        </NavLink>
        <NavLink exact to='/#top-movies' className='NavLink' activeClassName="selectedLink">  
          Top Movies
        </NavLink>
        <NavLink exact to='/#coming-soon' className='NavLink' activeClassName="selectedLink">  
          Coming Soon
        </NavLink>
        <NavLink exact to='/favorites' className='NavLink' activeClassName="selectedLink">  
          Favorites
        </NavLink>
      </div>
      <div className="header__user-menu">
        <div className="inner">
          <span><img className='user-avatar' alt='line drawing of a torso'src={avatar} /> </span>
          <h1>Hey, {user.name}</h1>
          <p>This is an informative card that will tell you something that's... well, important!</p>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  user: state.user
})



export default connect(mapStateToProps)(Nav);
