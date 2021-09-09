import { call, put, takeLatest } from "redux-saga/effects";

import { GET_SEARCH_RESULT, setSearch } from "../actions";
import { requestGetSearchResult } from "../services/api";

export function* getSearchResult(action) {
  const data = action.payload;
  try {
    const response = yield call(requestGetSearchResult, action.payload);
    yield put(setSearch([data[1], response]));
  } catch (error) {
    console.log(error);
  }
}

export function* searchResultSaga() {
  yield takeLatest(GET_SEARCH_RESULT, getSearchResult);
}
