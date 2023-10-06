import { fetchMoviesByQuery } from 'API/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      if (query.trim()) {
        try {
          const fetchedMovies = await fetchMoviesByQuery(query);
          setMovies(fetchedMovies.results);
        } catch (error) {
          console.log(error);
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
      {movies && <MoviesList movies={movies} />}
      <Toaster />
    </>
  );
};
export default Movies;
