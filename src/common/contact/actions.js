// @flow
import type { Action, Deps } from '../types';
import messages from './firebaseMessages';
import { Observable } from 'rxjs/Observable';
import { ValidationError } from '../lib/validation';

export const sendContactMessage = (options?: Object): Action => ({
  type: 'SEND_CONTACT_MSG',
  payload: { options },
});

export const sendContactMessageDone = (response: Object): Action => ({
  type: 'SEND_CONTACT_MSG_DONE',
  payload: {
    response,
  },
});

export const sendContactMessageFailed = (error: Error): Action => ({
  type: 'SEND_CONTACT_MSG_FAIL',
  payload: {
    error,
  },
});

const validateEmailAndMessage = (validate, fields) => validate(fields)
  .prop('email')
    .required()
    .email()
  .prop('message')
    .required()
  .promise;

const mapFirebaseErrorToEsteValidationError = (code) => {
  const prop = {
    'contact/invalid-email': 'email',
    'contact/wrong-password': 'password',
  }[code];
  return new ValidationError(code, { prop });
};

const contactEpic = (
  action$: any,
  { firebase, getUid, validate, now }: Deps,
) => {
  const sendMessage = ({ email, message }) => {
    const promises = [
      validateEmailAndMessage(validate, { email, message }),
      firebase.update({
        [`contact-messages/${getUid()}`]: {
          createdAt: now(),
          email,
          message,
        },
      }),
    ];

    return Observable.from(promises)
      .map((response) => sendContactMessageDone(response))
      .catch((error) => {
        if (messages[error.code]) {
          error = mapFirebaseErrorToEsteValidationError(error.code);
        }
        return Observable.of(sendContactMessageFailed(error));
      });
  };

  return action$
    .filter((action: Action) => action.type === 'SEND_CONTACT_MSG')
    .mergeMap(({ payload: { options } }) => sendMessage(options));
};

export const epics = [
  contactEpic,
];

