import { List, Item } from './Cast.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../../services/fetchAPI';
import avatarNone from '../../../img/avatarNone.png';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  console.log(cast);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <List>
      {cast.map(({ profile_path, character, id, name }) => (
        <Item key={id}>
          <div>
            <img
              src={
                profile_path === null
                  ? avatarNone
                  : `https://image.tmdb.org/t/p/w500/${profile_path}`
              }
              alt=""
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
