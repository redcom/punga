// @flow
import 'rxjs';
import { combineEpics } from 'redux-observable';
import { epics as appEpics } from './app/actions';
import { epics as authEpics } from './auth/actions';
import { epics as usersEpics } from './users/actions';

// pintery
import { epics as contactEpics } from './contact/actions';

const epics = [
  ...appEpics,
  ...authEpics,
  ...usersEpics,
  ...contactEpics,

];

const configureEpics = (deps: Object) =>
  (action$: any, { getState }: any) =>
    combineEpics(...epics)(action$, { ...deps, getState });

export default configureEpics;
