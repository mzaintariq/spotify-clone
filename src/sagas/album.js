import { call, put, takeLatest } from "redux-saga/effects";

import { GET_ALBUM, setAlbum } from "../actions";
import { requestGetAlbum } from "../services/api";

export function* getAlbum(action) {
  try {
    const response = yield call(requestGetAlbum, action.payload);
    yield put(setAlbum(response));
  } catch (error) {
    console.log(error);
  }
}

export function* albumSaga() {
  yield takeLatest(GET_ALBUM, getAlbum);
}
