import { call, put, takeLatest } from "redux-saga/effects";

import { GET_CATEGORY_LIST, setCategoryList } from "../actions";
import { requestGetCategoriesList } from "../services/api";

function* getCategoryList(action) {
  try {
    const response = yield call(requestGetCategoriesList, action.payload);
    yield put(setCategoryList(response));
  } catch (error) {
    console.log(error);
  }
}

export function* categoryListSaga() {
  yield takeLatest(GET_CATEGORY_LIST, getCategoryList);
}
