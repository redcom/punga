// @flow
import type { Action, ContactState } from '../types';

const initialState = {
  formDisabled: false,
  formIsSent: false,
  error: null,
};

const reducer = (
  state: ContactState = initialState,
  action: Action,
): ContactState => {
  switch (action.type) {
    case 'SEND_CONTACT_MSG': {
      return { ...state, formDisabled: true };
    }

    case 'SEND_CONTACT_MSG_DONE': {
      return { ...state, formDisabled: false, error: null, formIsSent: true };
    }

    case 'SEND_CONTACT_MSG_FAIL': {
      return { ...state, formDisabled: false, error: action.payload.error };
    }

    default:
      return state;
  }
};

export default reducer;

