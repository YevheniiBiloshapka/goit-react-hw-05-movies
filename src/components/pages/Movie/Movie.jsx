import { Hero, HeroForm, Box } from './Movie.styled';
import { Container } from '../../Container/Container.styled';
import { Button, Input, Form } from 'components/Forms/Forms.styled';
import { useEffect, useState } from 'react';

import { fetchSearchMovie } from '../../services/fetchAPI';
import { useSearchParams } from 'react-router-dom';
import { FilmList } from '../Movie/FilmList/FilmList';
import { NotFound } from './NotFound/NotFound';

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  useEffect(() => {
    if (query === null || query.trim() === '') return;

    fetchSearchMovie(query, page).then(res => {
      setMovie(prevMovie => [...prevMovie, ...res.results]);
      setTotalPages(res.total_pages);
    });
  }, [query, page]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams({ query: form.elements.eventname.value });
    setMovie([]);
    form.reset();
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Hero>
        <HeroForm>
          <h1>
            <span>movie</span> search
          </h1>
          <Form onSubmit={handleSubmit}>
            <Input type="text" name="eventname" placeholder="🔍  Enter name" />
            <Button type="submit">Search</Button>
          </Form>
        </HeroForm>
      </Hero>
      <Container>
        {totalPages === 0 && (
          <Box>
            <NotFound query={query} />
          </Box>
        )}
        {totalPages > 1 && (
          <Box>
            {totalPages > 1 && <FilmList movie={movie} page={loadMore} />}
            {page < totalPages && <Button onClick={loadMore}>load more</Button>}
          </Box>
        )}
      </Container>
    </>
  );
};

export default Movie;
