import React from 'react';
import './MovieCard.css';
import star from '../../images/bluestar.svg';
import favstar from '../../images/fav-star.svg'

const MovieCard = ({movie}) => {

  return (
    <div className='movie'>
      <img alt='star indicating is a movie is favorited or not' src={star} className='card__image-favorite' />
      <img className='card__image' alt="movie poster" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <div className='card__header'>
        <p>
          {movie.title}
        </p>
      </div>
      <h4 className='card__release-date'>
        {movie.release_date.slice(0,4)}
      </h4>
    </div>
  )
}

export default MovieCard;