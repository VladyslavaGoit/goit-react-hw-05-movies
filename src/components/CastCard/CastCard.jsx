export const CastCard = ({ name, profilePath, character }) => {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w92/${profilePath}`} alt={name} />
      <h3>{name}</h3>
      <p>Character {character}</p>
    </div>
  );
};
