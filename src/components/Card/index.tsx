import React from 'react';
import styled from 'styled-components';
import { IUser } from '../../types/IUser';
import CardBody from './components/CardBody';
import CardFooter from './components/CardFooter';
import CardHeader from './components/CardHeader';

const CardContent = styled.div`
  border: 1px solid var(--color-gray);
`;

const Card = ({ user } : { user: IUser }) => {
  const { username, name, email, phone, website } = user;
  const userInfo = { name, email, phone, website };
  return (
    <CardContent>
      <CardHeader username={username} />
      <CardBody userInfo={userInfo} />
      <CardFooter />
    </CardContent>
  )
}

export default Card;