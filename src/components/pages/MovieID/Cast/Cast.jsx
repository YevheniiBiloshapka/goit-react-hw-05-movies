import { List, Item } from './Cast.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../../services/fetchAPI';
import castNotFound from '../../../img/castNotFound.jpg';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <List>
      {cast.length === 0 && <p>Not found</p>}
      {cast.map(({ profile_path, character, id, name }) => (
        <Item key={id}>
          <div>
            <img
              src={
                profile_path === null
                  ? castNotFound
                  : `https://image.tmdb.org/t/p/w500/${profile_path}`
              }
              alt={name}
            />
          </div>
          <h4>{name}</h4>
          <p>
            Character:
            <span>{character}</span>
          </p>
        </Item>
      ))}
    </List>
  );
};
