import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddleware];

const config = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : applyMiddleware(...middlewares);

const store = createStore(reducers, config);

sagaMiddleware.run(sagas);

export default store;
