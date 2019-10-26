import React from 'react';
import { Link } from 'react-router-dom'
import './MovieCard.css';
import star from '../../images/bluestar.svg';
import favstar from '../../images/fav-star.svg'

const MovieCard = ({movie, toggleFavorites}) => {
  const id = movie.movie_id;
  return (
    <Link to={`/movie/${id}`}>
      <div className='movie' movie_id={movie.movie_id}>
        <img alt='star indicating is a movie is favorited or not' 
        src={star} 
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
  )
}

export default MovieCard;