import { takeLatest } from "redux-saga/effects";
import { handleGetToken } from "./handlers/auth";
import { handleGetUserData } from "./handlers/user";
import { handleGetFeatured } from "./handlers/featured";
import { handleGetNewReleases } from "./handlers/newreleases";
import { handleGetPlaylist } from "./handlers/playlist";
import { handleGetSearchResult } from "./handlers/search";
import {
  GET_FEATURED,
  GET_NEW_RELEASES,
  GET_PLAYLIST,
  GET_SEARCH_RESULT,
  GET_TOKEN,
  GET_USER_DATA,
} from "../actions";

export function* watcherSaga() {
  yield takeLatest(GET_TOKEN, handleGetToken);
  yield takeLatest(GET_USER_DATA, handleGetUserData);
  yield takeLatest(GET_FEATURED, handleGetFeatured);
  yield takeLatest(GET_NEW_RELEASES, handleGetNewReleases);
  yield takeLatest(GET_PLAYLIST, handleGetPlaylist);
  yield takeLatest(GET_SEARCH_RESULT, handleGetSearchResult);
}
