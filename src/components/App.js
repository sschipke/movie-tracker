
import React, { Component } from 'react';
import { Route } from 'react-router-dom';


//Importing Other Componets
import Login from './Login/Login';
import Nav from './Nav/Nav';
import Favorites from './Favorites/Favorites';
import Main from './Main/Main'
import MoviePage from './MoviePage/MoviePage';
import {getMovies, getUpcomingMovies} from '../util/apiCalls'
import {setMovies, setUpcomingMovies } from '../actions'
import './App.css';
import { connect } from 'react-redux';


class App extends Component { 

  async componentDidMount() {
    const {setMovies, setUpcomingMovies} = this.props;
    try {
      const data = await getMovies();
      setMovies(data)
    } catch(error) {
      console.log(error)
    }

    try {
      const data = await getUpcomingMovies();
      setUpcomingMovies(data)
    } catch(error) {
      console.log (error)
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

const mapStateToProps = state => ({
  movies: state.movies,
  upcomingMovies: state.upcomingMovies,
})

const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch(setMovies(movies)),
  setUpcomingMovies: (upcomingMovies) => dispatch(setUpcomingMovies(upcomingMovies))
})

export default connect(mapStateToProps, mapDispatchToProps) (App)
