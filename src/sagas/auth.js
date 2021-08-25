import { call, put } from "redux-saga/effects";

import { setToken, GET_TOKEN } from "../actions";
import { requestGetToken } from "../services/api";
import { takeLatest } from "redux-saga/effects";

function* getToken(action) {
  try {
    const response = yield call(requestGetToken, action.payload);
    yield put(setToken(response));
  } catch (error) {
    console.log(error);
  }
}

export function* authSaga() {
  yield takeLatest(GET_TOKEN, getToken);
}
