import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid gray;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LayuotGrid = styled.div`
  padding: 0 15px;
  max-width: 1200px;
`;
