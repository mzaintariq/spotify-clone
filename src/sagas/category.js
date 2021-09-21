import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_CATEGORY_LIST,
  GET_CATEGORY_DATA,
  GET_CATEGORY_PLAYLISTS,
  setCategoryList,
  setCategoryData,
  setCategoryPlaylists,
} from "../actions";
import {
  requestGetCategoriesList,
  requestGetCategoryData,
  requestGetCategoryPlaylists,
} from "../services/api";

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

function* getCategoryData(action) {
  try {
    const data = yield call(requestGetCategoryData, action.payload);
    yield put(setCategoryData(data));
  } catch (error) {
    console.log(error);
  }
}

export function* categoryDataSaga() {
  yield takeLatest(GET_CATEGORY_DATA, getCategoryData);
}

function* getCategoryPlaylists(action) {
  try {
    const playlists = yield call(requestGetCategoryPlaylists, action.payload);
    yield put(setCategoryPlaylists(playlists));
  } catch (error) {
    console.log(error);
  }
}

export function* categoryPlaylistsSaga() {
  yield takeLatest(GET_CATEGORY_PLAYLISTS, getCategoryPlaylists);
}
