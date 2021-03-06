export const getMovies = async () => {
  let res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9e1950f701d0af712babdede31811e9e&language=en-US')
  if (!res.ok) {
    throw Error('Woops! Something went wrong');
  }
  let data = await res.json();
  return cleanMovieData(data.results);
}

const cleanMovieData = data => data.map(movie => ({
    poster_path: movie.poster_path,
    title: movie.title,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    overview: movie.overview,
    movie_id: movie.id
  }));

export const getUpcomingMovies = async () => {
  let res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9e1950f701d0af712babdede31811e9e&language=en-US')
  if (!res.ok) {
    throw Error('Woops! Something went wrong');
  }
  let data = await res.json();
  return cleanMovieData(data.results);
}

export const createNewUser = async user => {
  let url = `${process.env.REACT_APP_MOVIE_TRACKER_BACKEND_BASE_URL}/api/v1/users`
  let options = {
      method: 'POST',
      body: JSON.stringify(user),
        headers: {
      'Content-Type': 'application/json'
    }
  }
  let res = await fetch(url, options);

  if(res.status===500) {
    throw Error('This email has already been used');
  }

  if(!res.ok) {
    throw Error('Woops! Something went wrong');
  }

  return res.json();
}

export const logInUser = async user => {
  let url = `${process.env.REACT_APP_MOVIE_TRACKER_BACKEND_BASE_URL}/api/v1/login`
  let options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let res = await fetch(url, options);

  if (res.status === 401) {
    throw Error('email or password is incorrect');
  }

  if (!res.ok) {
    throw Error('Woops! Something went wrong');
  }

  return res.json();
}

export const getUserFavorites = async userID => {
  let url = `${process.env.REACT_APP_MOVIE_TRACKER_BACKEND_BASE_URL}/api/v1/users/${userID}/moviefavorites`;
  let res = await fetch(url);
  if (!res.ok) {
    throw Error('Unable to get favorites');
  }
  let parsedRes = await res.json();
  return parsedRes.favorites;
}

export const postFavorite = async (userId, movie) => {
  let url = `${process.env.REACT_APP_MOVIE_TRACKER_BACKEND_BASE_URL}/api/v1/users/${userId}/moviefavorites`;
  let options = {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let res = await fetch(url, options);
  if (!res.ok) {
    throw Error('Could not add favorite movie.');
  }
}


export const deleteFavorite = async (userId, movie_id) => {
  let url = `${process.env.REACT_APP_MOVIE_TRACKER_BACKEND_BASE_URL}/api/v1/users/${userId}/moviefavorites/${movie_id}`
  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  let res = await fetch(url, options);
  if (!res.ok) {
      throw Error('Could not delete favorite.');
  }

}

export const wakeUpHeroku = async () => {
  const res = await fetch(process.env.REACT_APP_MOVIE_TRACKER_BACKEND_BASE_URL);
};
