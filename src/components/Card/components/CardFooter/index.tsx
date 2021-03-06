import React from 'react';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import StarLargeIcon from '@atlaskit/icon/glyph/star-large';
import TrashIcon from '@atlaskit/icon/glyph/trash';

const CardFooterItem = styled.div`
`;

const CardFooterButtons = styled.div`
  display: flex;
  width: 100%;
`;

const CardFooter = () => (
  <CardFooterItem>
    <CardFooterButtons>
      <Button style={{ width: '100%'}}>
        <StarLargeIcon label="Xico"/> 
      </Button>
      <Button style={{ width: '100%'}}>
        <TrashIcon label="Xico"/> 
      </Button>
    </CardFooterButtons>
  </CardFooterItem>
)

export default CardFooter;