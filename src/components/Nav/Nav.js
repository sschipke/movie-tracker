import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
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
        <NavLink exact to='/now_playing' className='NavLink' activeClassName="selectedLink">  
          Now Playing
        </NavLink>
        <NavLink exact to='/upcoming' className='NavLink' activeClassName="selectedLink">  
          Coming Soon
        </NavLink>
        <NavLink exact to='/favorites' className='NavLink' activeClassName="selectedLink">  
          Favorites
        </NavLink>
      </div>
      <div className="header__user-menu">
        <div className="inner">
          <h3 className='header__user-name'>
            {user.name ? (<>{user.name} <a href='/login'>Logout</a></>): (<a href='/login'>Login</a>)}
          </h3>
          <img className='user-avatar' alt='line drawing of a torso'src={avatar} />
          <p></p>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  user: state.user
})



export default connect(mapStateToProps)(Nav);
