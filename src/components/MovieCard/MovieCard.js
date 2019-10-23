import React from 'react';
import './MovieCard.css';

const MovieCard = ({movie}) => {

  return (
    <div className='movie'>
      <h2 className='card__header'>
        {movie.title}
      </h2>
      <img className='card_image' alt="movie poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <h4 className='card__release-date'>
        {movie.release_date.slice(0,4)}
      </h4>
    </div>
  )
}

export default MovieCard;