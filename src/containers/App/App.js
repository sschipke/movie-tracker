
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Login from '../Login/Login';
import Nav from '../Nav/Nav';
import Favorites from '../Favorites/Favorites';
import Main from '../Main/Main';
import MoviePage from '../../components/MoviePage/MoviePage';
import {getMovies, getUpcomingMovies, getUserFavorites, deleteFavorite, postFavorite, logInUser} from '../../util/apiCalls';
import { setMovies, setUpcomingMovies, setFavorites, setUser } from '../../actions';
import MovieList from '../../components/MovieList/MovieList';
import './App.css';

export class App extends Component {
  async componentDidMount() {
    const {
      setMovies,
      setUpcomingMovies,
      setFavorites,
      setUser,
      user
    } = this.props;
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }

    try {
      const data = await getUpcomingMovies();
      setUpcomingMovies(data);
    } catch (error) {
      console.log (error)
    };

    if(localStorage.getItem("user")) {
      console.log(JSON.parse(localStorage.getItem("user")))
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const {email, password} = savedUser
      try {
        let userParams = {email, password}
        let currentUser = await logInUser(userParams);
        let userFavorites = await getUserFavorites(currentUser.id);
        setFavorites(userFavorites);
        setUser(currentUser);
      } catch({message}) {
        console.log(message)
      }
    }

    if(user.name) {
      try {
        const userFavs = await getUserFavorites(user.id);
        setFavorites(userFavs);
      } catch (error) {
        console.log(error);
      }
    }
  }

  toggleFavorites = (e, movie) => {
    e.preventDefault();
    const userID = this.props.user.id;
    if (this.props.favorites.map((fav) => fav.title).includes(movie.title)) {
      this.removeFavorite(userID, movie.movie_id);
    } else {
      this.addFavorite(userID, movie);
    }
  }

  removeFavorite = async (userID,movieID) => {
    try {
      await deleteFavorite(userID, movieID);
      const updatedFavorites = await getUserFavorites(userID);
      this.props.setFavorites(updatedFavorites);
    } catch ({ message }) {
      console.log(message);
    }
  }

  addFavorite = async (userID, movie) => {
    try {
      await postFavorite(userID, movie);
      const currentFavorites = await getUserFavorites(userID);
      this.props.setFavorites(currentFavorites);
    } catch({ message }) {
      console.log(message);
    }
  };

  logOut = () => {
    localStorage.clear()
  }



  render = () => {
    return (
      <div className="App">
        <Route exact path='/login' render={ (props)=> <Login {...props}/>} />
        <Route path='/' render={ () => <Nav logOut={this.logOut} /> } />
        <Route exact path='/' render={() => <Main toggleFavorites={this.toggleFavorites} /> } />
        <Route exact path='/favorites' render={ () => <Favorites toggleFavorites={this.toggleFavorites} movies={this.props.favorites} /> } />
        <Route exact path='/movie/:movie_id' render={ ({match}) => {
          let allMovies = [...this.props.movies, ...this.props.upcomingMovies, ...this.props.favorites];
          let currentMovie = allMovies.find(movie => movie.movie_id === parseInt(match.params.movie_id))
          return (<MoviePage {...currentMovie}/>)
        }}/>
        <Route exact path='/upcoming' render={() => <MovieList toggleFavorites={this.toggleFavorites} movies={this.props.upcomingMovies}/> } />
        <Route exact path='/now_playing' render={() => <MovieList toggleFavorites={this.toggleFavorites}movies={this.props.movies}/> } />
      </div> 
    );
  };
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  upcomingMovies: state.upcomingMovies,
  favorites: state.favorites,
  user: state.user,
});

export const mapDispatchToProps = dispatch => (bindActionCreators({
  setMovies, setUpcomingMovies, setFavorites, setUser
}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps) (App);

App.propTypes = {
  movies: PropTypes.array,
  upcomingMovies: PropTypes.array,
  favorites: PropTypes.array,
  user: PropTypes.object,
  setMovies: PropTypes.func.isRequired,
  setUpcomingMovies: PropTypes.func.isRequired,
  setFavorites: PropTypes.func.isRequired
}
