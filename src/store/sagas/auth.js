import {call, put} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import jwtDecode from 'jwt-decode';

import api from '../../services/api';

import {Creators as AuthActions} from '../ducks/auth';

export function* init() {
  const token = yield call(AsyncStorage.getItem, '@user:token');

  if (token) {
    const {uid} = jwtDecode(token);
    try {
      const response = yield call(api.get, `/api/v1/users/${uid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      yield put(AuthActions.signInSuccess({token, user: response.data}));
    } catch (err) {
      yield put(
        AuthActions.signInFailure('Não foi possível se conectar ao servidor.'),
      );
    }
  }
  yield put(AuthActions.initCheckSuccess());
}

export function* signIn({payload}) {
  try {
    const response = yield call(api.post, '/sign_in', payload);
    yield call(AsyncStorage.setItem, '@user:token', response.data.token);

    const {uid} = jwtDecode(response.data.token);
    const {data: user} = yield call(api.get, `/api/v1/users/${uid}`, {
      headers: {Authorization: `Bearer ${response.data.token}`},
    });

    yield put(
      AuthActions.signInSuccess({
        token: response.data.token,
        user,
      }),
    );
  } catch (err) {
    let message = 'Não foi possível se conectar ao servidor.';
    if (err.response) {
      if (err.response.status === 401) {
        message = 'Não há um usuário com esse e-mail cadastrado.';
      } else {
        message = err.response.data[0].message;
      }
    }
    yield put(AuthActions.signInFailure(message));
  }
}

export function* signUp({payload}) {
  try {
    yield call(api.post, '/sign_up', payload);

    yield put(AuthActions.signInRequest(payload));
  } catch (err) {
    const message = err.response
      ? err.response.data[0].message
      : 'Não foi possível se conectar ao servidor.';
    yield put(AuthActions.signUpFailure(message));
  }
}

export function* logout() {
  yield call(AsyncStorage.removeItem, '@user:token');
}
