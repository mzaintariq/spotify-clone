import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_ARTIST,
  setArtist,
  setArtistAlbums,
  setArtistTopTracks,
} from "../actions";
import {
  requestGetArtist,
  requestGetArtistTopTracks,
  requestGetArtistAlbums,
} from "../services/api";

function* getArtist(action) {
  try {
    const response = yield call(requestGetArtist, action.payload);
    const responseTopTracks = yield call(
      requestGetArtistTopTracks,
      action.payload
    );
    const responseAlbums = yield call(requestGetArtistAlbums, action.payload);
    yield put(setArtist(response));
    yield put(setArtistTopTracks(responseTopTracks));
    yield put(setArtistAlbums(responseAlbums));
  } catch (error) {
    console.log(error);
  }
}

export function* artistSaga() {
  yield takeLatest(GET_ARTIST, getArtist);
}
