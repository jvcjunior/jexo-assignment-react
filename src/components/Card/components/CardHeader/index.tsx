import React from 'react';
import Avatar from '@atlaskit/avatar';
import { CardHeaderItem } from './styles';
import consts from '../../../../utils/consts';

const CardHeader = ({ username } : { username: string }) => (
    <CardHeaderItem>
      <Avatar size="xxlarge" src={`${consts.AVATAR_URL}/${username}.svg?options[mood][]=happy`}/>
    </CardHeaderItem>
)

export default CardHeader;