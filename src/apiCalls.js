export const getMovies = async () => {
  let res = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9e1950f701d0af712babdede31811e9e')
  let data = await res.json()
  return data.results
}