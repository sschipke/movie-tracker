import { combineReducers } from 'redux';
import movies from './movies';
import user from './user';
import upcomingMovies from './upcomingMovies';
import favorites from './favorites';

const rootReducer = combineReducers({
  movies,
  upcomingMovies,
  user,
  favorites,
});

export default rootReducer;
