import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_USER_TOP,
  setUserPlaylists,
  setUserTopArtists,
  setUserTopTracks,
} from "../actions";
import {
  requestGetUserTopTracks,
  requestGetUserTopArtists,
  requestGetUserPlaylists,
} from "../services/api";

function* getUserTop(action) {
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

export function* userTopSaga() {
  yield takeLatest(GET_USER_TOP, getUserTop);
}
