import {
  Hero,
  Title,
  FilmList,
  Item,
  Tumb,
  ItemName,
  ItemImage,
} from './Home.styled';

import { Container } from '../../Container/Container.styled';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { fetchTrend } from '../../services/fetchAPI';

const Home = () => {
  const location = useLocation();
  const [trandMovie, setTrandMovie] = useState([]);
  useEffect(() => {
    fetchTrend().then(setTrandMovie);
  }, []);

  return (
    <>
      <Hero>
        <Title>
          <span>Trending</span>Today
        </Title>
      </Hero>
      <Container>
        <FilmList>
          {trandMovie.map(({ id, poster_path, title, original_title }) => (
            <Item key={id}>
              <NavLink to={`/movies/${id}/cast`} state={{ from: location }}>
                <ItemImage
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={original_title}
                  width="240"
                  height="300"
                />
                <Tumb>
                  <ItemName>{title}</ItemName>
                </Tumb>
              </NavLink>
            </Item>
          ))}
        </FilmList>
      </Container>
    </>
  );
};

export default Home;
