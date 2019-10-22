import React from 'react';

const MoviePage = () => {
  return(
    <div className='movie-page'>
      <div className='movie-page__poster'>Poster</div>
      <div className='movie-page__rating'>4.7 out of 5</div>
      <div className='movie-page__title'>Titel</div>
      <div className='movie-page__release'>Released in 1985</div>
      <div className='movie-page__plot'>Thing happened in this movie.  Maybe this app will tell you about them</div>
    </div>
  )

}

export default MoviePage;