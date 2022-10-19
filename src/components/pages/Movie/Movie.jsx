import {
  Hero,
  HeroForm,
  FilmList,
  Item,
  Tumb,
  ItemName,
  ItemImage,
} from './Movie.styled';
import { Container } from '../../Container/Container.styled';
import { Button, Input, Form } from 'components/Forms/Forms.styled';

export const Movie = () => {
  return (
    <>
      <Hero className="Hero">
        <HeroForm>
          <h1>
            <span>movie</span> search
          </h1>
          <Form>
            <Input type="text" placeholder="🔍  Enter name" />
            <Button>Search</Button>
          </Form>
        </HeroForm>
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
