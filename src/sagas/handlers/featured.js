import { call, put } from "redux-saga/effects";
import { setFeatured } from "../../actions";
import { requestGetFeatured } from "../requests/featured";

export function* handleGetFeatured(action) {
  try {
    const response = yield call(requestGetFeatured, action.payload);
    yield put(setFeatured(response));
  } catch (error) {
    console.log(error);
  }
}
