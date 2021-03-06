import Spinner from '@atlaskit/spinner';
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../context';
import { getUsers } from '../../reducers/user.action';
import { IUser } from '../../types/IUser';
import Card from '../Card';

const CardGridContainer = styled.div`
  padding: 0 2em;
`
const CardGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2em;

  @media (min-width: $768px) {
    grid-template-columns: repeat(2, 1fr);
  }  

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }  

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }  
`;

  const LoadingContainer = styled.div`
    display: flex;
    justify-content:center; // centers in the flex direction and the default flex-direction is row
    align-items:center; // centers perpendicular to the flex direction
    height: 100vh; // 100% view height
    width: 100vw; // 100% view width
  }`;
  // position: absolute; // so it goes behind the current content

const CardGrid = () => {
  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    getUsers(dispatch)
  }, [dispatch])
  
  return (
    <CardGridContainer>
      <CardGridContent>
        {state.users.loading && <LoadingContainer><Spinner size="xlarge" /></LoadingContainer>}
        {!state.users.loading && state.users.list.map((user: IUser) => <Card key={user.id} user={user} />)}
      </CardGridContent>
    </CardGridContainer>
  )
}

export default CardGrid;