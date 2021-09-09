import { call, put, takeLatest } from "redux-saga/effects";

import { GET_LIBRARY_DATA, setLibraryAlbums, setLibraryArtists, setLibraryPlaylists, setLibraryTracks } from "../actions";
import { requestGetLibraryAlbums, requestGetLibraryArtists, requestGetLibraryPlaylists, requestGetLibraryTracks } from "../services/api";

function* getLibraryData(action) {
  try {
    const responseArtists = yield call(requestGetLibraryArtists, action.payload);
    const responseAlbums = yield call(requestGetLibraryAlbums, action.payload);
    const responseTracks = yield call(requestGetLibraryTracks, action.payload);
    const responsePlaylists = yield call(requestGetLibraryPlaylists, action.payload);
    yield put(setLibraryArtists(responseArtists));
    yield put(setLibraryAlbums(responseAlbums));
    yield put(setLibraryTracks(responseTracks));
    yield put(setLibraryPlaylists(responsePlaylists));
  } catch (error) {
    console.log(error);
  }
}

export function* librarySaga() {
  yield takeLatest(GET_LIBRARY_DATA, getLibraryData);
}
