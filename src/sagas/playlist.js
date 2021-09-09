import { call, put, takeLatest } from "redux-saga/effects";

import { GET_PLAYLIST, setPlaylist } from "../actions";
import { requestGetPlaylist } from "../services/api";

function* getPlaylist(action) {
  try {
    const response = yield call(requestGetPlaylist, action.payload);
    yield put(setPlaylist(response));
  } catch (error) {
    console.log(error);
  }
}

export function* playlistSaga() {
  yield takeLatest(GET_PLAYLIST, getPlaylist);
}
