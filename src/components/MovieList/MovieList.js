import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../../containers/MovieCard/MovieCard';
import './MovieList.css';


const MovieList = ({ movies, toggleFavorites }) => {
  const allMovies = movies.map((movie) => (
    <MovieCard
      toggleFavorites={toggleFavorites}
      movie={movie}
      key={Math.random()}
    />
  ));

  return (
    <section className="section__movies">
      {allMovies}
    </section>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  toggleFavorites: PropTypes.func.isRequired
}