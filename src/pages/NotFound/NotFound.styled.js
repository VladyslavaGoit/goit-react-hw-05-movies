import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const TextInfo = styled.p`
  margin-bottom: 15px;
  font-size: 22px;
  line-height: 1.7;
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 190px;
  background-color: burlywood;
  color: black;
`;
