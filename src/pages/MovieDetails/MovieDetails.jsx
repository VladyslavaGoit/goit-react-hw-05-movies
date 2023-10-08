import { fetchMovieById } from 'API/fetchMovies';
import { Error } from 'components/Error/Error';
import { useRef } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  BackLink,
  DescriptionBox,
  InfoList,
  InfoTitle,
  ListGenres,
  MovieBox,
  Section,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=300x187';
  useEffect(() => {
    const getMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const fetchedMovie = await fetchMovieById(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkRef.current}>
        <HiArrowLeft size={20} /> <span>Go back</span>
      </BackLink>
      {loading && <div>Loading...</div>}
      {movie && (
        <div>
          <Section>
            <MovieBox>
              <img
                src={
                  movie['backdrop_path']
                    ? `https://image.tmdb.org/t/p/w300/${movie['backdrop_path']}`
                    : defaultImg
                }
                alt={`Poster movie ${movie.title}`}
              />
              <DescriptionBox>
                <h2>{movie.title}</h2>
                <p>
                  User score: <br />
                  {movie['vote_average']}
                </p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ListGenres>
                  {movie.genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ListGenres>
              </DescriptionBox>
            </MovieBox>
          </Section>
          <Section>
            <InfoTitle>Additional information</InfoTitle>
            <InfoList>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </InfoList>
          </Section>
          <Outlet />
        </div>
      )}
      {error && <Error />}
    </>
  );
};
export default MovieDetails;
