import React, { useContext } from 'react';
import StarLargeIcon from '@atlaskit/icon/glyph/star-large';
import StarFilledIcon from '@atlaskit/icon/glyph/star-filled';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import { AppContext } from '../../../../context';
import { UserActions } from '../../../../reducers/user.reducer';
import { CardFooterItem, CardFooterButtons, StyledButton } from './styles';

type FooterInfo = {
  id: number; 
  isFavorite?: boolean;
}

type CardFooterProps = {
  footerInfo: FooterInfo
}

const CardFooter = ({ footerInfo } : CardFooterProps ) => {
  const { id, isFavorite } = footerInfo;
  const { dispatch } = useContext(AppContext);
  
  return (
    <CardFooterItem>
      <CardFooterButtons>
        <StyledButton onClick={e => {dispatch({type: UserActions.starUser, payload: { id }})}}>
          {isFavorite && <StarFilledIcon label="Star" />  }
          {!isFavorite && <StarLargeIcon label="Star"/> }
        </StyledButton>
        <StyledButton onClick={e => {dispatch({type: UserActions.deleteUser, payload: { id }})}}>
          <TrashIcon label="Remove" /> 
        </StyledButton>
      </CardFooterButtons>
    </CardFooterItem>
  )
}

export default CardFooter;