import React from 'react';
import MovieList from '../MovieList/MovieList';
import { connect } from 'react-redux';
import './Main.css';

const Main = ({movies, upcomingMovies}) => {
  
  return (
    <main>
      <h1 className = 'main__heading-playing'>Playing this week</h1>
        <MovieList className = 'current-movies' movies={movies}/>
      <h1 className = 'main__heading-upcoming'>Upcoming Releases</h1>
        <MovieList className = 'upcoming-movies' movies={upcomingMovies} />
    </main>
  )
}

const mapStateToProps =  state => ({
  movies: state.movies,
  upcomingMovies: state.upcomingMovies
})

export default connect(mapStateToProps)(Main);