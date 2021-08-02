import { takeLatest } from "redux-saga/effects";
import { handleGetToken } from "./handlers/auth";
import { handleGetUserData } from "./handlers/user";
import { handleGetFeatured } from "./handlers/featured";
import { handleGetPlaylist } from "./handlers/playlist";
import {
  GET_FEATURED,
  GET_PLAYLIST,
  GET_TOKEN,
  GET_USER_DATA,
} from "../actions";

export function* watcherSaga() {
  yield takeLatest(GET_TOKEN, handleGetToken);
  yield takeLatest(GET_USER_DATA, handleGetUserData);
  yield takeLatest(GET_FEATURED, handleGetFeatured);
  yield takeLatest(GET_PLAYLIST, handleGetPlaylist);
}
