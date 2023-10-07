import { fetchReviews } from 'API/fetchMovies';
import { Error } from 'components/Error/Error';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
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
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {movieReviews && !loading && (
        <div>We don't have any reviews for this movie.</div>
      )}
      {error && <Error />}
    </div>
  );
};
