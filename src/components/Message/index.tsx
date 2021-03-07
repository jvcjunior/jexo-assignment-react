import React from 'react';
import styled from 'styled-components';
import SectionMessage from '@atlaskit/section-message';

const MessageContent = styled.div`
  position: absolute;
  top:0;
  right:0;
  z-index: 99;
  width: 400px;
}`;

const Message = () => (
    <MessageContent>
      <SectionMessage appearance="confirmation">
        <p>Success Test.</p>
      </SectionMessage>
    </MessageContent>
)

export default Message;