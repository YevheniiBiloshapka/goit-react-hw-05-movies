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

export const MovieId = () => {
  return (
    <>
      <Container>
        <Button>
          <MdArrowBack />
          Go back
        </Button>
        <Box>
          <Image>
            <img
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/b/b2/The_Batman_Poster.jpg/202px-The_Batman_Poster.jpg"
              alt=""
            />
          </Image>
          <Descr>
            <FilmName>
              <h2>The Batman</h2>
              <p>
                User Score:
                <span>74%</span>
              </p>
            </FilmName>
            <FilmInfo>
              <div>
                <h3>Overview</h3>
                <p>
                  An American superhero film based on the DC comic book
                  superhero Batman, produced by major Warner Bros. Pictures, DC
                  Films, 6th & Idaho and Dylan Clark Productions, which is a
                  reboot of the Batman films. The film is directed by Matt
                  Reeves, who co-wrote the screenplay with Peter Craigomruen.
                  Starring Robert Pattinson, Zoë Kravitz, Paul Dano, Jeffrey
                  Wright, John Turturro, Peter Sarsgaard, Andy Serkis and Colin
                  Farrell. Batman (Pattinson) is in his second year of fighting
                  crime and trying to uncover the causes of Gotham's
                  aggravation, while facing off against the Riddler (Dano), a
                  serial killer who preys on Gotham's elite power.
                </p>
              </div>
              <div>
                <h3>Genres</h3>
                <p>Drama History War</p>
              </div>
            </FilmInfo>
          </Descr>
        </Box>
        <Addition>
          <h2>Additional information</h2>
          <TabList>
            <li>
              <Item href="/">Cast</Item>
            </li>
            <li>
              <Item href="/reviews">Reviews</Item>
            </li>
          </TabList>
          <Reviews />
          <Cast />
        </Addition>
      </Container>
    </>
  );
};
