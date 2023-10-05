import { fetchTrendMovies } from 'API/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        const fetchedTrendMovies = await fetchTrendMovies();
        const trendMovies = fetchedTrendMovies.results;
        setMovies(trendMovies);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </div>
  );
};
export default Home;
