import { MovieCard } from 'components/MovieCard/MovieCard';
import { List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <MovieCard title={title} id={id} />
        </li>
      ))}
    </List>
  );
};
