import React from 'react';
import './MovieCard.css';

const MovieCard = () => {

  return (
    <div className='movie'>
      <div className='card__Image'>
        Image
      </div>
      <div className='card__header'>
        Title Here
      </div>
      <div className='card__release-date'>
        Released in 1976
      </div>
    </div>
  )
}

export default MovieCard;