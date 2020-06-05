import {call, put} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import * as navigation from '../../services/navigation';
import api from '../../services/api';
import jwtDecode from 'jwt-decode';

import {Creators as AuthActions} from '../ducks/auth';

export function* signIn({payload}) {
  try {
    const response = yield call(api.post, '/sign_in', payload);
    yield call(AsyncStorage.setItem, '@user:token', response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));

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
    navigation.navigate('Main');
  } catch (err) {
    console.tron.log(err);
    const message = err.response
      ? err.response.data[0].message
      : 'Não foi possível se conectar ao servidor.';
    yield put(AuthActions.signInFailure(message));
  }
}
