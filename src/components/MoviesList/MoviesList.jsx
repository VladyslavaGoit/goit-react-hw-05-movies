import { MovieCard } from 'components/MovieCard/MovieCard';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <MovieCard title={title} id={id} />
        </li>
      ))}
    </ul>
  );
};
