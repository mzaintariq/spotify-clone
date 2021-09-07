import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from "./reducers/index";
import { watcherSaga } from "./sagas/rootSaga";

// const sagaMiddleware = createSagaMiddleware();
// const middleware =
//   process.env.NODE_ENV !== "production"
//     ? [require("redux-immutable-state-invariant").default(), sagaMiddleware]
//     : [sagaMiddleware];

// const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

// sagaMiddleware.run(watcherSaga);

// export default store;


const persistConfig = {
  key: 'root',
  storage,
}
const sagaMiddleware = createSagaMiddleware();
const middleware =
  process.env.NODE_ENV === "development"
    ? [require("redux-immutable-state-invariant").default(), sagaMiddleware]
    : [sagaMiddleware];

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

const store = createStore(persistedReducer, {}, applyMiddleware(...middleware))
// const persistor = persistStore(store)

sagaMiddleware.run(watcherSaga);

// export default store;
export default store;




 
 
// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }