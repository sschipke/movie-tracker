import  { combineReducers } from 'redux';

import { movies } from './movies';
import { upcomingMovies } from './upcomingMovies';


const rootReducer = combineReducers ({ 
  movies,
  upcomingMovies
})

export default rootReducer;