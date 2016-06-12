import * as actions from './actions';
import { Record } from 'immutable';

const InitialState = Record({
  // Defined in src/server/frontend/createInitialState.js by server config.
  currentLocale: null,
  defaultLocale: null,
  initialNow: null,
  locales: null,
  messages: {}
});
const initialState = new InitialState;

export default function intlReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return new InitialState(state);

  switch (action.type) {

    case actions.SET_CURRENT_LOCALE: {
      const { locale } = action.payload;
      return state.set('currentLocale', locale);
    }

  }

  return state;
}
