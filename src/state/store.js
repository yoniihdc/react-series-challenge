import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from '../reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, logger)(createStore);

const store = createStoreWithMiddleware(reducers);
sagaMiddleware.run(rootSaga);
export default store;