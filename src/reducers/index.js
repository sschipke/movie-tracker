import  { combineReducers } from 'redux';

import { movies } from './movies';
import { user } from './user'
import { upcomingMovies } from './upcomingMovies';


const rootReducer = combineReducers ({ 
  movies,
  upcomingMovies,
  user
})

export default rootReducer;