import React from 'react';
import './MovieCard.css';

const MovieCard = ({movie}) => {

  return (
    <div className='movie'>
      <div className='card__header'>
        {movie.title}
      </div>
      <img className='card_image' alt="movie poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <div className='card__release-date'>
        {movie.release_date.slice(0,4)}
      </div>
    </div>
  )
}

export default MovieCard;