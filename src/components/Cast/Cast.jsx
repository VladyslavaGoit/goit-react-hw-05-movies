import { fetchCast } from 'API/fetchMovies';
import { CastCard } from 'components/CastCard/CastCard';
import { Error } from 'components/Error/Error';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getCast = async () => {
      try {
        setError(false);
        setLoading(true);
        const { cast } = await fetchCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <>
      {loading && <div>Loading...</div>}
      {movieCast && (
        <ul>
          {movieCast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <CastCard
                name={name}
                character={character}
                profilePath={profile_path}
              />
            </li>
          ))}
        </ul>
      )}
      {error && <Error />}
    </>
  );
};
