import * as actions from './actions';
import { Record } from '../transit';

const InitialState = Record({
  error: null,
  online: false,
  storageLoaded: false,
}, 'app');

export default function appReducer(state = new InitialState, action) {
  switch (action.type) {

    case actions.APP_OFFLINE:
      return state.set('online', false);

    case actions.APP_ONLINE:
      return state.set('online', true);

    case actions.APP_STORAGE_LOAD:
      return state.set('storageLoaded', true);
  }

  // This is how we can handle all async actions rejections.
  if (action.type.endsWith('_ERROR')) {
    const error = action.payload;
    return state.set('error', error);
  }

  return state;
}
