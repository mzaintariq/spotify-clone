import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_ARTIST,
  GET_ARTIST_ALBUMS,
  GET_ARTIST_TOP_TRACKS,
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
    yield put(setArtist(response));
  } catch (error) {
    console.log(error);
  }
}

export function* artistSaga() {
  yield takeLatest(GET_ARTIST, getArtist);
}

function* getArtistTopTracks(action) {
  try {
    const responseTopTracks = yield call(
      requestGetArtistTopTracks,
      action.payload
    );
    yield put(setArtistTopTracks(responseTopTracks));
  } catch (error) {
    console.log(error);
  }
}

export function* artistTopTracksSaga() {
  yield takeLatest(GET_ARTIST_TOP_TRACKS, getArtistTopTracks);
}

function* getArtistAlbums(action) {
  try {
    const responseAlbums = yield call(requestGetArtistAlbums, action.payload);
    yield put(setArtistAlbums(responseAlbums));
  } catch (error) {
    console.log(error);
  }
}

export function* artistAlbumsSaga() {
  yield takeLatest(GET_ARTIST_ALBUMS, getArtistAlbums);
}
