// @flow
import { defineMessages } from 'react-intl';

const Messages = defineMessages({
  emailLegend: {
    defaultMessage: 'Email',
    id: 'contact.email.emailLegend',
  },
  emailPlaceholder: {
    defaultMessage: 'your@email.com',
    id: 'contact.email.emailPlaceholder',
  },
  descriptionLegend: {
    defaultMessage: 'Short Message',
    id: 'contact.message.messageLegend',
  },
  descriptionPlaceholder: {
    defaultMessage: 'Write a short message',
    id: 'contact.message.messagePlaceholder',
  },
  contactMessageSent: {
    defaultMessage: 'Message sent',
    id: 'contact.message.messageMessageSent',
  },
  required: {
    defaultMessage: `Please fill out {prop, select,
      email {email}
    }.`,
    id: 'contact.email.required',
  },
  email: {
    defaultMessage: 'Email address is not valid.',
    id: 'contact.email.email',
  },
});

export default Messages;
