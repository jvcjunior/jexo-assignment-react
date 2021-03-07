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

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }  

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }  

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  } 
  
  @media (min-width: 1536px) {
    grid-template-columns: repeat(5, 1fr);
  } 
`;

  const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center; 
    align-items:center; 
    height: 100vh; 
    width: 100vw;
  }`;

const CardGrid = () => {
  const { state, dispatch } = useContext(AppContext);
  
  useEffect(() => {
    getUsers(dispatch)
  }, [dispatch])
  
  return (
    <CardGridContainer>
      <CardGridContent>
        {state.users.loading && <LoadingContainer><Spinner size="xlarge" />Loading...</LoadingContainer>}
        {!state.users.loading && state.users.list.map((user: IUser) => <Card key={user.id} user={user} />)}
      </CardGridContent>
    </CardGridContainer>
  )
}

export default CardGrid;