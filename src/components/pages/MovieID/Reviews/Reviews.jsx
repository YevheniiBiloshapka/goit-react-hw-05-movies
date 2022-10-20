import { List, Item, Avatar, Comment } from './Reviews.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieReviews } from '../../../services/fetchAPI';
import avatarNone from '../../../img/reviewsAvatarNone.jpg';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <List>
      {reviews.length === 0 && <p>Not found</p>}
      {reviews.length !== 0 &&
        reviews.map(({ author, author_details, content, id }) => (
          <Item key={id}>
            <Avatar>
              <img
                src={
                  author_details.avatar_path === null
                    ? avatarNone
                    : `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
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
