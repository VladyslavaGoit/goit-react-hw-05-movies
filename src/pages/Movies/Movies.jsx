import { fetchMoviesByQuery } from 'API/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Error } from 'components/Error/Error';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      if (query.trim()) {
        try {
          setError(false);
          setLoading(true);
          const fetchedMovies = await fetchMoviesByQuery(query);
          setMovies(fetchedMovies.results);
          if (!fetchedMovies.results.length) {
            toast(
              `No movies was found for the request of '${query}'. Please try again.`,
              {
                icon: '🤷‍♂️',
              }
            );
          }
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      }
    };
    getMovies();
  }, [query]);

  const handleSubmitForm = event => {
    event.preventDefault();
    const searchValue = event.target.elements.query.value;
    const query =
      searchValue.trim() === '' ? {} : { query: searchValue.trim() };
    setSearchParams(query);
    if (searchValue.trim() === '') {
      toast('Enter a request please', {
        icon: '🤞',
      });
    }
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmitForm} />
      {loading && <div>Loading...</div>}
      {movies && <MoviesList movies={movies} />}
      {error && <Error />}
      <Toaster />
    </>
  );
};
export default Movies;
