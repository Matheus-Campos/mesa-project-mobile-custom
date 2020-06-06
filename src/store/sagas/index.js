import {all, takeLatest} from 'redux-saga/effects';

import {Types as AuthTypes} from '../ducks/auth';
import {Types as UserTypes} from '../ducks/user';
import {Types as LocationTypes} from '../ducks/location';

import {init, signIn, signUp, logout} from './auth';
import {updateUser} from './user';
import {getLocations} from './location';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.LOGOUT, logout),
    takeLatest(LocationTypes.GET_LOCATIONS_REQUEST, getLocations),
    takeLatest(UserTypes.UPDATE_USER_REQUEST, updateUser),
  ]);
}
