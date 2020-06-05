import {call, put} from 'redux-saga/effects';
import api from '../../services/api';

import {Creators as LocationActions} from '../ducks/location';

export function* getLocations() {
  try {
    const response = yield call(api.get, '/api/v1/locations');

    yield put(LocationActions.getLocationsSuccess(response.data.locations));
  } catch (err) {
    console.tron.log(err.response);
    yield put(LocationActions.getLocationsFailure(err.response.data.error));
  }
}