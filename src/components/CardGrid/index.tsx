import Spinner from '@atlaskit/spinner';
import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context';
import { getUsers } from '../../reducers/user.action';
import { IUser } from '../../types/IUser';
import Card from '../Card';
import { CardGridContainer, CardGridContent, LoadingContainer } from './styles';

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