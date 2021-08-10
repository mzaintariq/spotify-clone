import { call, put } from "redux-saga/effects";
import { setArtist, setArtistAlbums, setArtistTopTracks } from "../../actions";
import { requestGetArtist, requestGetArtistTopTracks, requestGetArtistAlbums } from "../requests/artist";

export function* handleGetArtist(action) {
  try {
    const response = yield call(requestGetArtist, action.payload);
    const responseTopTracks = yield call(requestGetArtistTopTracks, action.payload);
    const responseAlbums = yield call(requestGetArtistAlbums, action.payload);
    yield put(setArtist(response));
    yield put(setArtistTopTracks(responseTopTracks));
    yield put(setArtistAlbums(responseAlbums));
  } catch (error) {
    console.log(error);
  }
}
