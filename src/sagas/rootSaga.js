import { fork, all } from "redux-saga/effects";

import { authSaga } from "./auth";

export function* watcherSaga() {
  yield all([fork(authSaga)]);
}
