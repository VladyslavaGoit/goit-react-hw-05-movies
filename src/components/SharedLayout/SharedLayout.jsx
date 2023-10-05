import { NavLink, Outlet } from 'react-router-dom';
import { Container, Header, NavList } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <NavList>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </div>
  );
};
