import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  LayuotGrid,
  NavList,
  StyledLink,
} from './SharedLayout.styled';
import { Suspense } from 'react';

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
        <Suspense fallback={<div>Loading...</div>}>
          <LayuotGrid>
            <Outlet />
          </LayuotGrid>
        </Suspense>
      </main>
      <footer></footer>
    </Container>
  );
};
