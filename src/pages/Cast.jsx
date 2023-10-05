import { fetchCast } from 'API/fetchMovies';
import { CastCard } from 'components/CastCard/CastCard';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  useEffect(() => {
    const getCast = async () => {
      try {
        const { cast } = await fetchCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <>
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
    </>
  );
};
export default Cast;
