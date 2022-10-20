// key 46156cc0d20e82d0aaead8a5e0f96418
// key 2 eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjE1NmNjMGQyMGU4MmQwYWFlYWQ4YTVlMGY5NjQxOCIsInN1YiI6IjYzNTA0NjJhNWY0YjczMDA4ZDU1ODRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x2NjApbXGpgMJOW53ZsvXvL1OcZm7fC0AoYIWqQNekI
//https://api.themoviedb.org/3/trending/movie/day?api_key=46156cc0d20e82d0aaead8a5e0f96418

import axios from 'axios';
const KEY = '46156cc0d20e82d0aaead8a5e0f96418';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrend() {
  const responce = await axios.get(`/trending/movie/day`, {
    params: {
      api_key: KEY,
    },
  });

  return responce.data.results;
}

export async function fetchMovieById(id) {
  const response = await axios(`/movie/${id}`, {
    params: {
      api_key: KEY,
      language: 'en-US',
      append_to_response: id,
    },
  });
  return response.data;
}

export async function fetchMovieCast(id) {
  const response = await axios(`/movie/${id}/credits`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return response.data.cast;
}

export async function fetchMovieReviews(id) {
  const response = await axios(`/movie/${id}/reviews`, {
    params: {
      api_key: KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data.results;
}
