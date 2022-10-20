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
import { fetchTrend } from '../../services/fetchAPI';

export const Home = () => {
  const [trandMovie, setTrandMovie] = useState([]);
  console.log(trandMovie);

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
              <a href="/">
                <ItemImage
                  src={poster_path}
                  alt={original_title}
                  width="240"
                  height="300"
                />
                <Tumb>
                  <ItemName>{title}</ItemName>
                </Tumb>
              </a>
            </Item>
          ))}
        </FilmList>
      </Container>
    </>
  );
};
