export const getMovies = async () => {
  let res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9e1950f701d0af712babdede31811e9e&language=en-US')
  let data = await res.json()
  return data.results
}


export const getUpcomingMovies = async () => {
  let res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9e1950f701d0af712babdede31811e9e&language=en-US')
  let data = await res.json()
  return data.results
}

export const createNewUser = async user => {
  let url = 'http://localhost:3001/api/v1/users'
  let options = {
      method: 'POST',
      body: JSON.stringify(user),
        headers: {
      'Content-Type': 'application/json'
    }
  }
  let res = await fetch(url, options);

  if (!res.ok) {
    if(res.status===500) {
      throw Error('This email has already been used')
    }
  }
  return res.json();
}