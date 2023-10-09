import { fetchReviews } from 'API/fetchMovies';
import { Error } from 'components/Error/Error';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Title } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getReviews = async () => {
      try {
        setError(false);
        setLoading(true);
        const reviews = await fetchReviews(movieId);
        setMovieReviews(reviews.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {movieReviews && (
        <List>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <Title>Author: {author}</Title>
              <p>{content}</p>
            </li>
          ))}
        </List>
      )}
      {movieReviews && !loading && (
        <div>We don't have any reviews for this movie.</div>
      )}
      {error && <Error />}
    </div>
  );
};
export default Reviews;
