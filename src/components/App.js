
import React, { Component } from 'react';
import { Route } from 'react-router-dom';


//Importing Other Componets
import Login from './Login/Login';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Favorites from './Favorites/Favorites';
import MoviePage from './MoviePage/MoviePage';
import {getMovies} from '../util/apiCalls'
import './App.css';
class App extends Component { 
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    try {
      const data = await getMovies();
      this.setState({movies:data})
    } catch(error) {
      console.log(error)
    }
  }

  render = () => {
    return (
      <div className="App">
        <Route exact path='/login' render={ (props)=> <Login {...props}/>} />
        <Route path='/' render={ () => <Nav /> } />
        <Route exact path='/' render={ () => <Main /> } />
        <Route exact path='/favorites' render={ () => <Favorites /> } />
        <Route exact path='/movie/:id' render={ () => <MoviePage /> } />
      </div> 
    );
  }
  
}


export default App;
