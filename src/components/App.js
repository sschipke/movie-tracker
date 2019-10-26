
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {bindActionCreators} from 'redux';


//Importing Other Componets
import Login from './Login/Login';
import Nav from './Nav/Nav';
import Favorites from './Favorites/Favorites';
import Main from './Main/Main'
import MoviePage from './MoviePage/MoviePage';
import {getMovies, getUpcomingMovies, getUserFavorites, deleteFavorite, postFavorite} from '../util/apiCalls';
import {setMovies, setUpcomingMovies,  setFavorites} from '../actions';
import MovieList from './MovieList/MovieList'
import './App.css';
import { connect } from 'react-redux';


export class App extends Component { 

  async componentDidMount() {
    const {setMovies, setUpcomingMovies, setFavorites, user} = this.props;
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

    if(user.name) {
      try {
        let userFavs = await getUserFavorites(user.id)
        setFavorites(userFavs)
      } catch(error) {
        console.log(error)
      }
    }
    
  }

  toggleFavorites = (e, movie) => {
    e.preventDefault();
    let userID = this.props.user.id;
    if(this.props.favorites.map(fav => fav.title).includes(movie.title)) {
      this.removeFavorite(userID, movie.movie_id)
    } else {
      this.addFavorite(userID, movie)
    }
  }

  removeFavorite = async (userID,movieID) => {
    try {
      await deleteFavorite(userID, movieID);
      let updatedFavorites = await getUserFavorites(userID)
      this.props.setFavorites(updatedFavorites)
    } catch({message}) {
      console.log(message)
    }
  }

  addFavorite = async (userID, movie) => {
    try {
      await postFavorite(userID, movie);
      let currentFavorites = await getUserFavorites(userID);
      this.props.setFavorites(currentFavorites)
    } catch({message}) {
      console.log(message)
    }
  }



  render = () => {
    return (
      <div className="App">
        <Route exact path='/login' render={ (props)=> <Login {...props}/>} />
        <Route path='/' render={ () => <Nav /> } />
        <Route exact path='/' render={() => <Main toggleFavorites={this.toggleFavorites} /> } />
        <Route exact path='/favorites' render={ () => <MovieList toggleFavorites={this.toggleFavorites}movies={this.props.favorites} /> } />
        <Route exact path='/movie/:movie_id' render={ ({match}) => {
          let allMovies = [...this.props.movies, ...this.props.upcomingMovies, ...this.props.favorites];
          let currentMovie = allMovies.find(movie => movie.movie_id === parseInt(match.params.movie_id))
          return (<MoviePage {...currentMovie}/>)
        }}/>
        <Route exact path='/upcoming' render={() => <MovieList toggleFavorites={this.toggleFavorites} movies={this.props.upcomingMovies}/> } />
        <Route exact path='/now_playing' render={() => <MovieList toggleFavorites={this.toggleFavorites}movies={this.props.movies}/> } />
      </div> 
    );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies,
  upcomingMovies: state.upcomingMovies,
  favorites: state.favorites,
  user: state.user
})

export const mapDispatchToProps = dispatch => (bindActionCreators({
  setMovies, setUpcomingMovies, setFavorites
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps) (App)
