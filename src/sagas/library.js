import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_LIBRARY_ARTISTS,
  GET_LIBRARY_ALBUMS,
  GET_LIBRARY_PLAYLISTS,
  GET_LIBRARY_TRACKS,
  setLibraryAlbums,
  setLibraryArtists,
  setLibraryPlaylists,
  setLibraryTracks,
  GET_MORE_LIBRARY_TRACKS,
  setMoreLibraryTracks,
} from "../actions";
import {
  requestGetLibraryAlbums,
  requestGetLibraryArtists,
  requestGetLibraryPlaylists,
  requestGetLibraryTracks,
  requestGetMoreLibraryTracks,
} from "../services/api";

function* getLibraryArtists(action) {
  try {
    const responseArtists = yield call(
      requestGetLibraryArtists,
      action.payload
    );
    yield put(setLibraryArtists(responseArtists));
  } catch (error) {
    console.log(error);
  }
}

export function* libraryArtistsSaga() {
  yield takeLatest(GET_LIBRARY_ARTISTS, getLibraryArtists);
}

function* getLibraryAlbums(action) {
  try {
    const responseAlbums = yield call(requestGetLibraryAlbums, action.payload);
    yield put(setLibraryAlbums(responseAlbums));
  } catch (error) {
    console.log(error);
  }
}

export function* libraryAlbumsSaga() {
  yield takeLatest(GET_LIBRARY_ALBUMS, getLibraryAlbums);
}

function* getLibraryTracks(action) {
  try {
    const responseTracks = yield call(requestGetLibraryTracks, action.payload);
    yield put(setLibraryTracks(responseTracks));
  } catch (error) {
    console.log(error);
  }
}

export function* libraryTracksSaga() {
  yield takeLatest(GET_LIBRARY_TRACKS, getLibraryTracks);
}

function* getMoreLibraryTracks(action) {
  try {
    const response = yield call(requestGetMoreLibraryTracks, action.payload);
    yield put(setMoreLibraryTracks(response));
  } catch (error) {
    console.log(error);
  }
}

export function* getMoreLibraryTracksSaga() {
  yield takeLatest(GET_MORE_LIBRARY_TRACKS, getMoreLibraryTracks);
}

function* getLibraryPlaylists(action) {
  try {
    const responsePlaylists = yield call(
      requestGetLibraryPlaylists,
      action.payload
    );
    yield put(setLibraryPlaylists(responsePlaylists));
  } catch (error) {
    console.log(error);
  }
}

export function* libraryPlaylistsSaga() {
  yield takeLatest(GET_LIBRARY_PLAYLISTS, getLibraryPlaylists);
}
