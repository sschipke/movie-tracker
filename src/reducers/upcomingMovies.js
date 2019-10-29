const upcomingMovies = (state = [], action) => {
  switch (action.type) {
    case 'SET_UPCOMING_MOVIES':
      return action.upcomingMovies;
    default: return state;
  }
};

export default upcomingMovies;
