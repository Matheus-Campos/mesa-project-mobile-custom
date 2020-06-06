import {call, put, select} from 'redux-saga/effects';
import api from '../../services/api';

import {Creators as LocationActions} from '../ducks/location';

export function* getLocations() {
  try {
    const response = yield call(api.get, '/api/v1/locations');

    yield put(LocationActions.getLocationsSuccess(response.data.locations));
  } catch (err) {
    yield put(LocationActions.getLocationsFailure(err.response.data.error));
  }
}

export function* getLocation({payload: locationId}) {
  try {
    const response = yield call(api.get, `/api/v1/locations/${locationId}`);

    yield put(LocationActions.getLocationSuccess(response.data));
  } catch (err) {
    yield put(LocationActions.getLocationsFailure(err.message));
  }
}

export function* rateLocation({payload}) {
  try {
    const response = yield call(api.post, '/api/v1/ratings', payload);
    const user = yield select((state) => state.auth.user);

    const rating = {
      ...response.data,
      user,
    };

    yield put(LocationActions.rateLocationSuccess(rating));
  } catch (err) {
    const message = err.response
      ? err.response.data[0].message
      : 'Não há conexão com o servidor.';
    alert(message);
    yield put(LocationActions.rateLocationFailure());
  }
}
