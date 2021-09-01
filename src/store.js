import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from "./reducers/index";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
// const middleware =
//   process.env.NODE_ENV !== "production"
//     ? [reduxImmutableStateInvariant(), sagaMiddleware]
//     : [sagaMiddleware];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
