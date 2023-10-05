import { fetchMovieById } from 'API/fetchMovies';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const fetchedMovie = await fetchMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [movieId]);
  return (
    <>
      <section>
        {movie && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie['backdrop_path']}`}
              alt={`Poster movie ${movie.title}`}
            />
            <div>
              <h2>{movie.title}</h2>
              <p>
                User score: <br />
                {movie['vote_average']}
              </p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
      <section>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};
export default MovieDetails;
