import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';


const MovieList = ({movies, toggleFavorites}) => {
  console.log('movieCard toggle', toggleFavorites)
  let allMovies = movies.map(movie => 
  <MovieCard 
    toggleFavorites={toggleFavorites} 
    movie={movie} 
    key={Math.random()}
  />)

  return(
    <section className='section__movies'>
      {allMovies}
    </section>
  )

}

export default MovieList;