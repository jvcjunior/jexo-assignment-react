import React from 'react';
import styled from 'styled-components';
import EmailIcon from '@atlaskit/icon/glyph/email';
import VidHangUpIcon from '@atlaskit/icon/glyph/vid-hang-up';
import HomeCircleIcon from '@atlaskit/icon/glyph/home-circle';

const CardBodyItem = styled.div`
  border: 1px solid rgb(221, 221, 221);
  padding: 1em;
`;

const CardBodyRow = styled.div`
  display: flex;
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
        <EmailIcon label="Xico"/> 
        <span>{email}</span>
      </CardBodyRow>
      <CardBodyRow>
        <VidHangUpIcon label="Xico"/> 
        <span>{phone}</span>
      </CardBodyRow>
      <CardBodyRow>
        <HomeCircleIcon label="Xico"/> 
        <a href={`http://${website}`}>{`http://${website}`}</a>
      </CardBodyRow>
    </CardBodyItem>
  )
}

export default CardBody;