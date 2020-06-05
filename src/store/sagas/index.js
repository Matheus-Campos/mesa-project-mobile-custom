import {all, takeLatest} from 'redux-saga/effects';

import {Types as AuthTypes} from '../ducks/auth';

import {signIn} from './auth';

export default function* rootSaga() {
  yield all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
}
