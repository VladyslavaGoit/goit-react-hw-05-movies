import { fetchReviews } from 'API/fetchMovies';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await fetchReviews(movieId);
        setMovieReviews(reviews.results);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <div>
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
    </div>
  );
};
export default Reviews;
