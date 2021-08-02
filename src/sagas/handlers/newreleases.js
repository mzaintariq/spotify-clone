import { call, put } from "redux-saga/effects";
import { setNewReleases } from "../../actions";
import { requestGetNewReleases } from "../requests/newreleases";

export function* handleGetNewReleases(action) {
  try {
    const response = yield call(requestGetNewReleases, action.payload);
    console.log("CHELCKCKCKKCKC: ", response)
    yield put(setNewReleases(response));
  } catch (error) {
    console.log(error);
  }
}
