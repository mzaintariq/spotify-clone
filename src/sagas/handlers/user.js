import { call, put } from "redux-saga/effects";
import { setUserData } from "../../actions";
import { requestGetUserData } from "../requests/user";

export function* handleGetUserData(action) {
  try {
    const response = yield call(requestGetUserData, action.payload);
    yield put(setUserData(response));
  } catch (error) {
    console.log(error);
  }
}
