import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_CATEGORY_DATA,
  setCategoryData,
  setCategoryPlaylists,
} from "../actions";
import {
  requestGetCategoryData,
  requestGetCategoryPlaylists,
} from "../services/api";

function* getCategoryData(action) {
  try {
    const data = yield call(requestGetCategoryData, action.payload);
    const playlists = yield call(requestGetCategoryPlaylists, action.payload);
    yield put(setCategoryData(data));
    yield put(setCategoryPlaylists(playlists));
  } catch (error) {
    console.log(error);
  }
}

export function* categoryDataSaga() {
  yield takeLatest(GET_CATEGORY_DATA, getCategoryData);
}
