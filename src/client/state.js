import State from '../lib/state';
import immutable from 'immutable';
import reviveAuth from './auth/revive';
import reviveTodos from './todos/revive';

const initialState = process.env.IS_BROWSER
  ? window._appState
  : require('../server/initialstate');

// Custom revirer example, check how to convert JSON to custom record types.
// http://facebook.github.io/immutable-js/docs/#/fromJS
export const state = new State(initialState, function(key, value) {
  // Revive only top level keys.
  if (this === initialState)
    switch (key) {
      case 'auth': return reviveAuth(value);
      case 'todos': return reviveTodos(value);
    }

  // This is default fromJS method behavior. Revive [] as List, and {} as Map.
  return immutable.Iterable.isIndexed(value)
    ? value.toList()
    : value.toMap();
});

export const authCursor = state.cursor(['auth']);
export const i18nCursor = state.cursor(['i18n']);
export const pendingActionsCursor = state.cursor(['pendingActions']);
export const todosCursor = state.cursor(['todos']);
export const userCursor = state.cursor(['user']);
