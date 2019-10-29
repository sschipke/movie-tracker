import React from 'react';
import PropTypes from 'prop-types';
import './MoviePage.css';

const MoviePage = (movie) => {
  return(
    <div className='movie-page'>
      <img className='movie__image' alt="movie poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <div className='movie__info'>
        <div className='movie-page__title'>{movie.title}</div>
        <div className='movie-page__rating'>Rated: {movie.vote_average} out of 10</div>
        <div className='movie-page__plot'>{movie.overview}</div>
        <div className='movie-page__release'>Released on {movie.release_date}</div>
      </div>
    </div>
  );
};

export default MoviePage;

MoviePage.propTypes = {
  movie: PropTypes.object.isRequired,
}