import { call, put, takeLatest } from "redux-saga/effects";

import {
  GET_USER_DATA,
  setUserData,
  GET_USER_PLAYLISTS,
  GET_USER_TOP_ARTISTS,
  GET_USER_TOP_TRACKS,
  setUserPlaylists,
  setUserTopArtists,
  setUserTopTracks,
} from "../actions";
import {
  requestGetUserData,
  requestGetUserTopTracks,
  requestGetUserTopArtists,
  requestGetUserPlaylists,
} from "../services/api";

function* getUserData(action) {
  try {
    const response = yield call(requestGetUserData, action.payload);
    yield put(setUserData(response));
  } catch (error) {
    console.log(error);
  }
}

export function* userDataSaga() {
  yield takeLatest(GET_USER_DATA, getUserData);
}

function* getUserTopTracks(action) {
  try {
    const topTracks = yield call(requestGetUserTopTracks, action.payload);
    yield put(setUserTopTracks(topTracks));
  } catch (error) {
    console.log(error);
  }
}

export function* userTopTracksSaga() {
  yield takeLatest(GET_USER_TOP_TRACKS, getUserTopTracks);
}

function* getUserTopArtists(action) {
  try {
    const topArtists = yield call(requestGetUserTopArtists, action.payload);
    yield put(setUserTopArtists(topArtists));
  } catch (error) {
    console.log(error);
  }
}

export function* userTopArtistsSaga() {
  yield takeLatest(GET_USER_TOP_ARTISTS, getUserTopArtists);
}

function* getUserPlaylists(action) {
  try {
    const playlists = yield call(requestGetUserPlaylists, action.payload);
    yield put(setUserPlaylists(playlists));
  } catch (error) {
    console.log(error);
  }
}

export function* userPlaylistsSaga() {
  yield takeLatest(GET_USER_PLAYLISTS, getUserPlaylists);
}
