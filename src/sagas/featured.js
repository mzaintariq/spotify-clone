import { call, put, takeLatest } from "redux-saga/effects";

import { GET_FEATURED, setFeatured } from "../actions";
import { requestGetFeatured } from "../services/api";

function* getFeatured(action) {
  try {
    const response = yield call(requestGetFeatured, action.payload);
    yield put(setFeatured(response));
  } catch (error) {
    console.log(error);
  }
}

export function* featuredSaga() {
  yield takeLatest(GET_FEATURED, getFeatured);
}
