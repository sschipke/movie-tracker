
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {bindActionCreators} from 'redux';


//Importing Other Componets
import Login from './Login/Login';
import Nav from './Nav/Nav';
import Favorites from './Favorites/Favorites';
import Main from './Main/Main'
import MoviePage from './MoviePage/MoviePage';
import {getMovies, getUpcomingMovies, getUserFavorites} from '../util/apiCalls';
import {setMovies, setUpcomingMovies,  setFavorites} from '../actions';
import MovieList from './MovieList/MovieList'
import './App.css';
import { connect } from 'react-redux';


export class App extends Component { 

  async componentDidMount() {
    const {setMovies, setUpcomingMovies, setFavorites, user} = this.props;
    try {
      const data = await getMovies();
      let cleanData = data.map(movie => ({
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview,
        movie_id: movie.id
      }))
      setMovies(cleanData)
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

  toggleFavorites =(movie) => {
    if(this.props.favorites.map(fav => fav.title).includes(movie.title)) {
      this.removeFavorite()
    } else {
      this.addFavorite()
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
        <Route exact path='/upcoming' render={ () => <MovieList movies={this.props.upcomingMovies}/> } />
        <Route exact path='/now_playing' render={ () => <MovieList movies={this.props.movies}/> } />
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
