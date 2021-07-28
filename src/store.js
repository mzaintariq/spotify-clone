import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga)

export default store;