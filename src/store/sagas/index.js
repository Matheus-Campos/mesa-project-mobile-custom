import {all, takeLatest} from 'redux-saga/effects';

import {Types as AuthTypes} from '../ducks/auth';
import {Types as LocationTypes} from '../ducks/location';

import {signIn} from './auth';
import {getLocations} from './location';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(LocationTypes.GET_LOCATIONS_REQUEST, getLocations),
  ]);
}
