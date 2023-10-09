import { useLocation } from 'react-router-dom';
import { TextInfo, Wrapper } from './NotFound.styled';

const NotFound = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Wrapper>
      <img
        src="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=625x390"
        alt="not found page"
      />
      <TextInfo>
        The requested url: {location.pathname} was not found on this server 😧
      </TextInfo>
    </Wrapper>
  );
};
export default NotFound;
