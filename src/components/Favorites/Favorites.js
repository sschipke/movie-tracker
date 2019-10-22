import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './Favorites.css';


const Favorites = () => {
  const favoriteList = [<MovieCard />,<MovieCard />,<MovieCard />,<MovieCard />,<MovieCard />];

  return (
    <div className='favorites'>
      {favoriteList}
    </div>
  )
}

export default Favorites;