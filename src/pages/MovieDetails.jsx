import { NavLink } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <div>MovieDetails</div>
      <NavLink to="/movies/:movieId/cast">Cast</NavLink>
      <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
    </>
  );
};
export default MovieDetails;
