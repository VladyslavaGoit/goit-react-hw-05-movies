import { Image, Wrapper } from './CastCard.styled';

export const CastCard = ({ name, profilePath, character }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=92x57';
  return (
    <Wrapper>
      <Image
        src={
          profilePath
            ? `https://image.tmdb.org/t/p/w92/${profilePath}`
            : defaultImg
        }
        alt={name}
      />
      <h3>{name}</h3>
      <p>Character {character}</p>
    </Wrapper>
  );
};
