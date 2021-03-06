import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Avatar from '@atlaskit/avatar';

const CardHeaderItem = styled.div`
  border: 1px solid var(--color-gray);
  background-color: var(--color-gray);
  display: flex;
  justify-content: center;
  align-items: center;
}`;

const CardHeader = ({ username } : { username: string }) => (
    <CardHeaderItem>
      <Avatar size="xxlarge" src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}/>
    </CardHeaderItem>
)

export default CardHeader;