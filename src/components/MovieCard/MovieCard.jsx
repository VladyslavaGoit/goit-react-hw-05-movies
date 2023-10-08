import { useLocation } from 'react-router-dom';
import { StyledLink } from './MovieCard.styled';

export const MovieCard = ({ title, id }) => {
  const location = useLocation();
  return (
    <StyledLink to={`/movies/${id}`} state={{ from: location }}>
      {title}
    </StyledLink>
  );
};
