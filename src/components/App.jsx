import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Header from './Header/Header';
const Home = lazy(() => import('./pages/Home/Home'));
const Movie = lazy(() => import('./pages/Movie/Movie'));
const MovieId = lazy(() => import('./pages//MovieID/MovieID'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId/*" element={<MovieId />}></Route>
      </Route>
    </Routes>
  );
};
