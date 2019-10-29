import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { connect } from 'react-redux';
import './Main.css';

export const Main = ({movies, upcomingMovies, toggleFavorites}) => {
  return (
    <main>
      <h1 className = 'main__heading-playing'>Playing this week</h1>
        <MovieList toggleFavorites={toggleFavorites} className = 'current-movies' movies={movies}/>
      <h1 className = 'main__heading-upcoming'>Upcoming Releases</h1>
      <MovieList toggleFavorites={toggleFavorites} className = 'upcoming-movies' movies={upcomingMovies} />
    </main>
  )
}

export const mapStateToProps =  state => ({
  movies: state.movies,
  upcomingMovies: state.upcomingMovies
})

export default connect(mapStateToProps)(Main);