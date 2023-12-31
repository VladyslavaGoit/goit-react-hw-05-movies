import { fetchTrendMovies } from 'API/fetchMovies';
import { Error } from 'components/Error/Error';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { useEffect } from 'react';
import { Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setError(false);
        setLoading(true);
        const fetchedTrendMovies = await fetchTrendMovies();
        const trendMovies = fetchedTrendMovies.results;
        setMovies(trendMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      {loading && <div>Loading...</div>}
      {movies && <MoviesList movies={movies} />}
      {error && <Error />}
    </div>
  );
};
export default Home;
