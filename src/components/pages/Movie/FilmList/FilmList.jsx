import {
  List,
  Item,
  Tumb,
  ItemName,
  ItemImage,
} from '../FilmList/FilmList.styled';
import { NavLink, useLocation } from 'react-router-dom';
import nextId from 'react-id-generator';
import imageNotFound from '../../../img/coveNotFound.jpg';

export const FilmList = ({ movie }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movie.map(({ id, poster_path, title, original_title }) => (
          <Item key={nextId()}>
            <NavLink to={`/movies/${id}/cast`} state={{ from: location }}>
              <ItemImage
                src={
                  poster_path === null
                    ? imageNotFound
                    : `https://image.tmdb.org/t/p/w500/${poster_path}`
                }
                alt={original_title}
              />
              <Tumb>
                <ItemName>{title}</ItemName>
              </Tumb>
            </NavLink>
          </Item>
        ))}
      </List>
    </>
  );
};
