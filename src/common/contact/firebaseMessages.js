// @flow
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  'contact/invalid-email': {
    defaultMessage: 'The specified email is not a valid email.',
    id: 'firebase.error.INVALID_EMAIL',
  },
  'contact/wrong-password': {
    defaultMessage: 'The specified user account password is incorrect.',
    id: 'firebase.error.INVALID_PASSWORD',
  },
});

export default messages;

