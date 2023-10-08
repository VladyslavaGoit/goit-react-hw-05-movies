import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 160px;
  height: 32px;
  margin-bottom: 15px;
  border: 1px solid gainsboro;
  color: black;
`;

export const Section = styled.section`
  margin-bottom: 32px;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
`;

export const MovieBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const InfoTitle = styled.h4`
  margin-bottom: 8px;
`;
export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ListGenres = styled.ul`
  display: flex;
  gap: 10px;
`;
