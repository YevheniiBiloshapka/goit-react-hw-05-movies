import { List, Item, Avatar, Comment } from './Reviews.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../../services/fetchAPI';
import avatarNone from '../../../img/avatarNone.png';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  console.log(reviews);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }
  return (
    <List>
      {reviews.map(({ author, author_details, content, id }) => (
        <Item key={id}>
          <Avatar>
            <img
              src={
                author_details.avatar_path === null
                  ? `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
                  : author_details.avatar_path.substring(1)
              }
              alt="avatar"
            />
          </Avatar>

          <Comment>
            <h3>{author}</h3>
            <p>{content}</p>
          </Comment>
        </Item>
      ))}
    </List>
  );
};
