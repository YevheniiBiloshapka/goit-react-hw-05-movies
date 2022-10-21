import axios from 'axios';
const KEY = '46156cc0d20e82d0aaead8a5e0f96418';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrend() {
  const responce = await axios.get(`/trending/movie/day?api_key=${KEY}`);

  return responce.data.results;
}
export async function fetchSearchMovie(query, page) {
  const response = await axios(
    `/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  return response.data;
}
export async function fetchMovieById(id) {
  const response = await axios(`/movie/${id}}?api_key=${KEY}&language=en-US`);
  return response.data;
}

export async function fetchMovieCast(id) {
  const response = await axios(
    `/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data.cast;
}

export async function fetchMovieReviews(id) {
  const response = await axios(
    `/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data.results;
}
