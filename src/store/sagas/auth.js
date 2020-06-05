import {call, put} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import api from '../../services/api';

import {Creators as AuthActions} from '../ducks/auth';

export function* signIn({payload}) {
  try {
    const response = yield call(api.post, '/sign_in', payload);

    yield call(AsyncStorage.setItem, response.data.token);
    yield put(AuthActions.signInSuccess(response.data));
  } catch (err) {
    yield put(AuthActions.signInFailure());
  }
}
