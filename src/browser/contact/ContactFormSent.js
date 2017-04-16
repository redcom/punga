// @flow
import React from 'react';
import messages from '../../common/contact/Messages';
import { FormattedMessage } from 'react-intl';
import { Message } from '../../common/components';

const ContactFormSent = () => (
    <Message backgroundColor="success">
       <FormattedMessage {...messages.contactMessageSent} />
    </Message>
  );

export default ContactFormSent;

