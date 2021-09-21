import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_PLAYLIST,
  setPlaylist,
  GET_MORE_PLAYLIST_TRACKS,
  setMorePlaylistTracks,
} from "../actions";
import {
  requestGetPlaylist,
  requestGetMorePlaylistTracks,
} from "../services/api";

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
