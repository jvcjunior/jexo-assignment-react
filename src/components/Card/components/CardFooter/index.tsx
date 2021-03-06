import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import StarLargeIcon from '@atlaskit/icon/glyph/star-large';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import { AppContext } from '../../../../context';
import { UserActions } from '../../../../reducers/user.reducer';

const CardFooterItem = styled.div`
`;

const CardFooterButtons = styled.div`
  display: flex;
  width: 100%;
`;

const CardFooter = ({ userId } : { userId: number }) => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <CardFooterItem>
      <CardFooterButtons>
        <Button style={{ width: '100%'}}>
          <StarLargeIcon label="Star"/> 
        </Button>
        <Button style={{ width: '100%'}} onClick={e => {dispatch({type: UserActions.deleteUser, payload: { id: userId }})}}>
          <TrashIcon label="Remove" /> 
        </Button>
      </CardFooterButtons>
    </CardFooterItem>
  )
}

export default CardFooter;