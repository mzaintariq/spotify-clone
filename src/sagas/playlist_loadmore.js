import { call, put, takeLatest } from "redux-saga/effects";

import { GET_MORE_PLAYLIST_TRACKS, setMorePlaylistTracks } from "../actions";
import { requestGetMorePlaylistTracks } from "../services/api";

function* getMorePlaylistTracks(action) {
  try {
    const response = yield call(requestGetMorePlaylistTracks, action.payload);
    yield put(setMorePlaylistTracks(response));
  } catch (error) {
    console.log(error);
  }
}

export function* getMoreSaga() {
  yield takeLatest(GET_MORE_PLAYLIST_TRACKS, getMorePlaylistTracks);
}
