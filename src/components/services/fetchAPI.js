// key 46156cc0d20e82d0aaead8a5e0f96418
// key 2 eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjE1NmNjMGQyMGU4MmQwYWFlYWQ4YTVlMGY5NjQxOCIsInN1YiI6IjYzNTA0NjJhNWY0YjczMDA4ZDU1ODRhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x2NjApbXGpgMJOW53ZsvXvL1OcZm7fC0AoYIWqQNekI
//https://api.themoviedb.org/3/trending/movie/day?api_key=46156cc0d20e82d0aaead8a5e0f96418

import axios from 'axios';
const KEY = '?api_key=46156cc0d20e82d0aaead8a5e0f96418';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrend() {
  const responce = await axios.get(`/trending/movie/day${KEY}`);

  return responce.data.results;
}
