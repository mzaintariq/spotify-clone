import { takeLatest } from "redux-saga/effects";
import { handleGetToken } from "./handlers/auth";
import { handleGetUserData } from "./handlers/user";
import { GET_TOKEN, GET_USER_DATA } from "../actions";

export function* watcherSaga() {
  yield takeLatest(GET_TOKEN, handleGetToken);
  yield takeLatest(GET_USER_DATA, handleGetUserData);
}
