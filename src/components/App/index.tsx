import React, { useState, useEffect } from 'react';
import Spinner, { Size } from '@atlaskit/spinner';
import styled from 'styled-components';
import { usersAPI } from '../../services/api';
import { IUser } from '../../types/IUser';
import CardGrid from '../CardGrid';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
}`;

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(false);
  
  useEffect(() => {
    setLoadingUsers(true);
    usersAPI.get('/users')
      .then(result => result.data)
      .then((users) => {
        setUsers(users);
      })
      .finally(() => {
        setLoadingUsers(false);
      })
  }, [])

  return (
    <div>
      {loadingUsers && 
        <LoadingContainer>
          <Spinner size="large" /> 
        </LoadingContainer>
      }
      {!loadingUsers && <CardGrid data={users} /> }  
    </div>
  );
}

export default App;
