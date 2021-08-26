import { call, put, takeLatest } from "redux-saga/effects";

import { setNewReleases, GET_NEW_RELEASES } from "../actions";
import { requestGetNewReleases } from "../services/api";

function* getNewReleases(action) {
  try {
    const response = yield call(requestGetNewReleases, action.payload);
    yield put(setNewReleases(response));
  } catch (error) {
    console.log(error);
  }
}

export function* newReleasesSaga() {
  yield takeLatest(GET_NEW_RELEASES, getNewReleases);
}
