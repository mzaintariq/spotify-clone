import { fork, all } from "redux-saga/effects";

import { authSaga } from "./auth";
import { newReleasesSaga } from "./newreleases";
import { featuredSaga } from "./featured";
import { userDataSaga } from "./user";

export function* watcherSaga() {
  yield all([
    fork(authSaga),
    fork(newReleasesSaga),
    fork(featuredSaga),
    fork(userDataSaga),
  ]);
}
