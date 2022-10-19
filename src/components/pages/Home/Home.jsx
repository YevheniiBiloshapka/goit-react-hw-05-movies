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

export const Home = () => {
  return (
    <>
      <Hero className="Hero">
        <Title>
          <span>Trending</span>Today
        </Title>
      </Hero>
      <Container>
        <FilmList>
          <Item>
            <a href="/">
              <ItemImage
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/202px-The_Batman_Poster.jpg"
                alt=""
              />
              <Tumb className="Tumb">
                <ItemName>Batman</ItemName>
              </Tumb>
            </a>
          </Item>
          <Item>
            <a href="/">
              <ItemImage
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/202px-The_Batman_Poster.jpg"
                alt=""
              />
              <Tumb className="Tumb">
                <ItemName>Batman</ItemName>
              </Tumb>
            </a>
          </Item>

          <Item>
            <a href="/">
              <ItemImage
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/202px-The_Batman_Poster.jpg"
                alt=""
              />
              <Tumb className="Tumb">
                <ItemName>Batman</ItemName>
              </Tumb>
            </a>
          </Item>
          <Item>
            <a href="/">
              <ItemImage
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/202px-The_Batman_Poster.jpg"
                alt=""
              />
              <Tumb className="Tumb">
                <ItemName>Batman</ItemName>
              </Tumb>
            </a>
          </Item>
          <Item>
            <a href="/">
              <ItemImage
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/202px-The_Batman_Poster.jpg"
                alt=""
              />
              <Tumb className="Tumb">
                <ItemName>Batman</ItemName>
              </Tumb>
            </a>
          </Item>
          <Item>
            <a href="/">
              <ItemImage
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/202px-The_Batman_Poster.jpg"
                alt=""
              />
              <Tumb className="Tumb">
                <ItemName>Batman</ItemName>
              </Tumb>
            </a>
          </Item>
          <Item>
            <a href="/">
              <ItemImage
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/202px-The_Batman_Poster.jpg"
                alt=""
              />
              <Tumb className="Tumb">
                <ItemName>Batman</ItemName>
              </Tumb>
            </a>
          </Item>
          <Item>
            <a href="/">
              <ItemImage
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/202px-The_Batman_Poster.jpg"
                alt=""
              />
              <Tumb className="Tumb">
                <ItemName>Batman</ItemName>
              </Tumb>
            </a>
          </Item>
        </FilmList>
      </Container>
    </>
  );
};
