export const getMovies = async () => {
  let res = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=9e1950f701d0af712babdede31811e9e')
  let data = await res.json()
  return data.results
}


export const getUpcomingMovies = async () => {
  let res = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=9e1950f701d0af712babdede31811e9e&language=en-US')
  let data = await res.json()
  return data.results
}