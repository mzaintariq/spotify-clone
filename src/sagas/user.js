import { call, put, takeLatest } from "redux-saga/effects";

import { GET_USER_DATA, setUserData } from "../actions";
import { requestGetUserData } from "../services/api";

function* getUserData(action) {
  try {
    const response = yield call(requestGetUserData, action.payload);
    yield put(setUserData(response));
  } catch (error) {
    console.log(error);
  }
}

export function* userDataSaga() {
  yield takeLatest(GET_USER_DATA, getUserData);
}
