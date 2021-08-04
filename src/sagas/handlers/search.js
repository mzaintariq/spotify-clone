import { call, put } from "redux-saga/effects";
import { setSearch } from "../../actions";
import { requestGetSearchResult } from "../requests/search";

export function* handleGetSearchResult(action) {
  const data = action.payload;
  try {
    const response = yield call(requestGetSearchResult, action.payload);
    yield put(setSearch([data[1], response]));
  } catch (error) {
    console.log(error);
  }
}
