import { call, put } from "redux-saga/effects";
import {
  setUserPlaylists,
  setUserTopArtists,
  setUserTopTracks,
} from "../../actions";
import {
  requestGetUserTopTracks,
  requestGetUserTopArtists,
  requestGetUserPlaylists,
} from "../requests/user";

export function* handleGetUserTop(action) {
  try {
    const topTracks = yield call(requestGetUserTopTracks, action.payload);
    const topArtists = yield call(requestGetUserTopArtists, action.payload);
    const playlists = yield call(requestGetUserPlaylists, action.payload);
    yield put(setUserTopTracks(topTracks));
    yield put(setUserTopArtists(topArtists));
    yield put(setUserPlaylists(playlists));
  } catch (error) {
    console.log(error);
  }
}
