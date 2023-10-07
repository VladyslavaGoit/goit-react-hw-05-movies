import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 160px;
  height: 32px;

  border: 1px solid gainsboro;
`;

export const Section = styled.section`
  margin-bottom: 32px;
`;
