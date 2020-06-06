import {all, takeLatest} from 'redux-saga/effects';

import {Types as AuthTypes} from '../ducks/auth';
import {Types as UserTypes} from '../ducks/user';
import {Types as LocationTypes} from '../ducks/location';

import {init, signIn, signUp, logout} from './auth';
import {updateUser} from './user';
import {getLocations, getLocation, rateLocation} from './location';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(AuthTypes.LOGOUT, logout),
    takeLatest(LocationTypes.GET_LOCATIONS_REQUEST, getLocations),
    takeLatest(LocationTypes.GET_LOCATION_REQUEST, getLocation),
    takeLatest(LocationTypes.RATE_LOCATION_REQUEST, rateLocation),
  ]);
}
