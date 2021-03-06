import React, { useContext } from 'react';
import styled from 'styled-components';
import Button from '@atlaskit/button';
import StarLargeIcon from '@atlaskit/icon/glyph/star-large';
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import { AppContext } from '../../../../context';
import { UserActions } from '../../../../reducers/user.reducer';

const CardFooterItem = styled.div`
`;

const CardFooterButtons = styled.div`
  display: flex;
  width: 100%;
`;


type FooterInfo = {
  id: number; 
  isFavorite?: boolean;
}

type CardFooterProps = {
  footerInfo: FooterInfo
}

const CardFooter = ({ footerInfo } : CardFooterProps ) => {
  const { id, isFavorite } = footerInfo;
// const CardFooter = ({ userId } : { userId: number }) => {
  const { state, dispatch } = useContext(AppContext);
  
  return (
    <CardFooterItem>
      <CardFooterButtons>
        <Button style={{ width: '100%'}} onClick={e => {dispatch({type: UserActions.starUser, payload: { id }})}}>
          {isFavorite && <StarFilledIcon label="Star" />  }
          {!isFavorite && <StarLargeIcon label="Star"/> }
        </Button>
        <Button style={{ width: '100%'}} onClick={e => {dispatch({type: UserActions.deleteUser, payload: { id }})}}>
          <TrashIcon label="Remove" /> 
        </Button>
      </CardFooterButtons>
    </CardFooterItem>
  )
}

export default CardFooter;