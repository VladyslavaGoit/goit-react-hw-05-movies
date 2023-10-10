import { useLocation } from 'react-router-dom';
import { StyledLink, TextInfo, Wrapper } from './NotFound.styled';
import { HiArrowLeft } from 'react-icons/hi';

const NotFound = () => {
  const location = useLocation();
  return (
    <Wrapper>
      <img
        src="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=625x390"
        alt="not found page"
      />
      <div>
        <TextInfo>
          The requested url: {location.pathname} was not found on this server 😧
        </TextInfo>
        <StyledLink to="/">
          <HiArrowLeft size={20} /> <span>Back to Home</span>
        </StyledLink>
      </div>
    </Wrapper>
  );
};
export default NotFound;
