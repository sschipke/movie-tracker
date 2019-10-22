//Importing Libraries and Frameworks
import React, { Component } from 'react';
import { Route } from 'react-router-dom';


//Importing Other Componets
import Login from './Login/Login';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Favorites from './Favorites/Favorites';

import './App.css';



class App extends Component {

  componentDidMount = () => {
    //Initial Movie Fetch
  }

  render = () => {
    return (
      <div className="App">
        <Route exact path='/login' render={ (props)=> <Login {...props}/>} />
        <Route path='/' render={ () => <Nav /> } />
        <Route exact path='/' render={ () => <Main /> } />
        <Route exact path='/favorites' render={ () => <Favorites /> } />
      </div> 
    );
  }
}

export default App;
