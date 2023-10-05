import { Link } from 'react-router-dom';

export const MovieCard = ({ title, id }) => {
  return <Link to={`/movies/${id}`}>{title}</Link>;
};
