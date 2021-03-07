import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@atlaskit/icon/glyph/email';
import VidHangUpIcon from '@atlaskit/icon/glyph/vid-hang-up';
import HomeCircleIcon from '@atlaskit/icon/glyph/home-circle';

const CardBodyItem = styled.div`
  padding: 1em;
`;

const CardBodyRow = styled.div`
  display: flex;
  align-items: center;
`;

type UserInfo = {
  name: string; 
  email: string;
  phone: string;
  website: string;
}

type CardBodyProps = {
  userInfo: UserInfo
}

const CardBody = ({ userInfo } : CardBodyProps ) => {
  const { name, email, phone, website } = userInfo;
  return (
    <CardBodyItem>
      <CardBodyRow>
        <h3>{name}</h3>
      </CardBodyRow>
      <CardBodyRow>
        <EmailIcon label="Email"/> 
        <span>{email}</span>
      </CardBodyRow>
      <CardBodyRow>
        <VidHangUpIcon label="Phone"/> 
        <span>{phone}</span>
      </CardBodyRow>
      <CardBodyRow>
        <HomeCircleIcon label="Website"/> 
        <a href={`http://${website}`}>{`http://${website}`}</a>
      </CardBodyRow>
    </CardBodyItem>
  )
}

export default CardBody;