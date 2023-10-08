import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  LayuotGrid,
  NavList,
  StyledLink,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <LayuotGrid>
          <nav>
            <NavList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </NavList>
          </nav>
        </LayuotGrid>
      </Header>
      <main>
        <LayuotGrid>
          <Outlet />
        </LayuotGrid>
      </main>
      <footer></footer>
    </Container>
  );
};
