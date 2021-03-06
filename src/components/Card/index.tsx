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
  const { id, username, name, email, phone, website, isFavorite } = user;
  const userInfo = { name, email, phone, website };
  const footerInfo = { id, isFavorite };
  return (
    <CardContent>
      <CardHeader username={username} />
      <CardBody userInfo={userInfo} />
      <CardFooter footerInfo={footerInfo}/>
    </CardContent>
  )
}

export default Card;