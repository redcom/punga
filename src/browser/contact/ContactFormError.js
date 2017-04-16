// @flow
import type { State } from '../../common/types';
import React from 'react';
import Messages from '../../common/contact/Messages';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Message } from '../../common/components';

const getMessage = (error) =>
  Messages[error.name] || error.toString();

const ContactFormError = ({ error }) => {
  if (!error) return null;
  const message = getMessage(error);

  return (
    <Message backgroundColor="danger">
      {
        typeof message !== 'string'
          ? <FormattedMessage {...message} values={error.params} />
          : error.toString()
      }
    </Message>
  );
};

export default connect((state: State) => ({
  error: state.contact.error }),
)(ContactFormError);

