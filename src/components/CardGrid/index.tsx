import React from 'react';
import styled from 'styled-components';
import { IUser } from '../../types/IUser';
import Card from '../Card';

const CardGridContainer = styled.div`
  padding: 0 2em;
`
const CardGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2em;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }  

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }  

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }  
`;

const CardGrid = ({ data } : { data: IUser[]}) => (
  <CardGridContainer>
    <CardGridContent>
      {/* TODO: tratar quando nao vier dados */}
      {data.map((user: IUser) => <Card user={user} />)}
    </CardGridContent>
  </CardGridContainer>
)

export default CardGrid;