import { call, put } from "redux-saga/effects";
import { setRefresh } from "../../actions";
import { requestGetRefresh } from "../requests/refresh";

export function* handleGetRefresh(action) {
  try {
    const response = yield call(requestGetRefresh, action.payload);
    yield put(setRefresh(response));
  } catch (error) {
    console.log(error);
  }
}
