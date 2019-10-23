import React from 'react';
import './MovieCard.css';

const MovieCard = ({movie}) => {

  return (
    <div className='movie'>
      <div className='card__Image'>
        Image
      </div>
      <div className='card__header'>
        {movie.title}
      </div>
      <div className='card__release-date'>
        Released in: {movie.release_date.slice(0,4)}
      </div>
    </div>
  )
}

export default MovieCard;