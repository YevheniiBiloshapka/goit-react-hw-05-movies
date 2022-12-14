import { Container } from '../../Container/Container.styled';
import {
  Box,
  Image,
  Descr,
  FilmName,
  FilmInfo,
  Button,
  Addition,
  TabList,
  Item,
} from '../MovieID/MovieID.styled';
import { MdArrowBack } from 'react-icons/md';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';
import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieById } from '../../services/fetchAPI';
import imageNotFound from '../../img/coveNotFound.jpg';

const MovieId = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { poster_path, title, overview, genres, vote_average } = movie;
  return (
    <>
      <Container>
        <Button onClick={() => navigate(location?.state?.from ?? '/')}>
          <MdArrowBack />
          Go back
        </Button>
        <Box>
          <Image>
            <img
              src={
                poster_path === null
                  ? imageNotFound
                  : `https://image.tmdb.org/t/p/w500/${poster_path}`
              }
              alt=""
              width="240"
              height="300"
            />
          </Image>
          <Descr>
            <FilmName>
              <h2>{title}</h2>
              <p>
                Vote Average:
                <span>{vote_average}</span>
              </p>
            </FilmName>
            <FilmInfo>
              <div>
                <h3>Overview</h3>
                <p>{overview}</p>
              </div>
              <div>
                <h3>Genres</h3>

                <p>{genres.map(({ name }) => name + ', ')}</p>
              </div>
            </FilmInfo>
          </Descr>
        </Box>
        <Addition>
          <h2>Additional information</h2>
          <TabList>
            <li>
              <Item to="cast" state={location.state}>
                Cast
              </Item>
            </li>
            <li>
              <Item to="reviews" state={location.state}>
                Reviews
              </Item>
            </li>
          </TabList>

          <Routes>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="cast" element={<Cast />}></Route>
          </Routes>
        </Addition>
      </Container>
    </>
  );
};

export default MovieId;
