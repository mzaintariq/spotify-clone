import { call, put } from "redux-saga/effects";
import { setLibraryAlbums, setLibraryArtists, setLibraryPlaylists, setLibraryTracks } from "../../actions";
import { requestGetLibraryAlbums, requestGetLibraryArtists, requestGetLibraryPlaylists, requestGetLibraryTracks } from "../requests/library";

export function* handleGetLibraryData(action) {
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
