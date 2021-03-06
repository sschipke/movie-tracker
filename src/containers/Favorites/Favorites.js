import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import { Link } from 'react-router-dom';
import './Favorites.css';
import { connect } from 'react-redux';

export const Favorites = ({movies, user, toggleFavorites}) => {

  if (!user.name) {
    return (
      <div className="favorites">
        <h1>
          Please <Link to="/login">login</Link> to save favorites.
        </h1>
      </div>
    );
  };

  if (movies.length > 0 && user.name) {
    const favoriteList = movies.map((movie) => (<MovieCard key={Math.random()} movie={movie} toggleFavorites={toggleFavorites} />));
    return (
      <div className="favorites">
        {favoriteList}
      </div>
    );
  }

  return (
    <div className="favorites">
      <h1 className = "favorite__message">
        Please select a few favorite movies from
      </h1>
      <Link to="/now_playing">
        <h1>
        Now Playing
        </h1>
      </Link>
      <h2>
        or 
      </h2>
      <Link to="/upcoming" >
        <h1>
          Upcoming Releases
        </h1>
      </Link>    
    </div>
  );
};

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null) (Favorites);

Favorites.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.object,
  toggleFavorites: PropTypes.func.isRequired
}