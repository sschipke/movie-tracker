import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './MovieCard.css';
import star from '../../images/star.svg';
import favstar from '../../images/fav-star.svg';

export const MovieCard = ({movie, toggleFavorites, favorites}) => {
  let isFavorite = favorites.map(movie => movie.title).includes(movie.title);
  let faveImg = isFavorite ? favstar : star;
  let faveClass = isFavorite ? 'favorite' : '';
  const id = movie.movie_id;
  return (
    <Link to={`/movie/${id}`}>
      <div className={`movie ${faveClass}`}  movie_id={movie.movie_id}>
        <img alt='star indicating is a movie is favorited or not' 
        src={faveImg} 
        className='card__image-favorite' 
          onClick={ (e) => {
            toggleFavorites(e, movie)
          }}
        />
        <img 
        className='card__image' 
        alt="movie poster" 
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
        />
        <div className='card__header'>
          <p>
            {movie.title}
          </p>
        </div>
        <h4 className='card__release-date'>
          {movie.release_date.slice(0,4)}
        </h4>
      </div>
    </Link>
  );
}

export const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps)(MovieCard);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}