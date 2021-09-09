import { call, put, takeLatest } from "redux-saga/effects";

import { GET_REFRESH, setRefresh } from "../actions";
import { requestGetRefresh } from "../services/api";

function* getRefresh(action) {
  try {
    const response = yield call(requestGetRefresh, action.payload);
    yield put(setRefresh(response));
  } catch (error) {
    console.log(error);
  }
}

export function* refreshSaga() {
  yield takeLatest(GET_REFRESH, getRefresh);
}
