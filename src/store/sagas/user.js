import {call, put, select} from 'redux-saga/effects';
import api from '../../services/api';

import {Creators as UserActions} from '../ducks/user';

export function* updateUser({payload: user}) {
  try {
    const userId = yield select((state) => state.auth.user.id);
    const response = yield call(api.put, `/api/v1/users/${userId}`, user);

    yield put(UserActions.updateUserSuccess(response.data));
    alert('Informações atualizadas com sucesso!');
  } catch (err) {
    const message =
      err.response.data.error ||
      err.response.data[0].message ||
      'Não há conexão com o servidor';
    yield put(UserActions.updateUserFailure(message));
  }
}
