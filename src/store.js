import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import rootReducer from "./reducers/index";
import { watcherSaga } from "./sagas/rootSaga";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middleware =
  process.env.NODE_ENV === "development"
    ? [require("redux-immutable-state-invariant").default(), sagaMiddleware]
    : [sagaMiddleware];

export const store = createStore(persistedReducer, {}, applyMiddleware(...middleware));
export const persistor = persistStore(store);

sagaMiddleware.run(watcherSaga);
