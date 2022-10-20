import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from './pages/Home/Home';
import { Movie } from './pages/Movie/Movie';
import { MovieId } from './pages//MovieID/MovieID';

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
