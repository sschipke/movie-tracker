import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';
import { connect } from 'react-redux';

const MovieList = ({movies}) => {
  let allMovies = movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)

  return (allMovies)

}

const mapStateToProps =  state => ({
  movies: state.movies
})


export default connect(mapStateToProps)(MovieList);