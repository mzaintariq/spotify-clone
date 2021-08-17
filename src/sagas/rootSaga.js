import { takeLatest } from "redux-saga/effects";
import { handleGetToken } from "./handlers/auth";
import { handleGetUserData } from "./handlers/user";
import { handleGetFeatured } from "./handlers/featured";
import { handleGetNewReleases } from "./handlers/newreleases";
import { handleGetPlaylist } from "./handlers/playlist";
import { handleGetSearchResult } from "./handlers/search";
import { handleGetMorePlaylistTracks } from "./handlers/playlist_loadmore";
import { handleGetAlbum } from "./handlers/album";
import { handleGetArtist } from "./handlers/artist";
import { handleGetLibraryData } from "./handlers/library";
import { handleGetMoreLibraryTracks } from "./handlers/library_loadmore";
import { handleGetUserTop } from "./handlers/userTop";
import { handleGetCategoriesList } from "./handlers/categoriesList";
import { handleGetCategoryData } from "./handlers/category";
import { handleGetRefresh } from "./handlers/refresh";
import {
  GET_ALBUM,
  GET_ARTIST,
  GET_CATEGORIES_LIST,
  GET_CATEGORY_DATA,
  GET_FEATURED,
  GET_LIBRARY_DATA,
  GET_MORE_LIBRARY_TRACKS,
  GET_MORE_PLAYLIST_TRACKS,
  GET_NEW_RELEASES,
  GET_PLAYLIST,
  GET_REFRESH,
  GET_SEARCH_RESULT,
  GET_TOKEN,
  GET_USER_DATA,
  GET_USER_TOP,
} from "../actions";

export function* watcherSaga() {
  yield takeLatest(GET_TOKEN, handleGetToken);
  yield takeLatest(GET_USER_DATA, handleGetUserData);
  yield takeLatest(GET_FEATURED, handleGetFeatured);
  yield takeLatest(GET_NEW_RELEASES, handleGetNewReleases);
  yield takeLatest(GET_PLAYLIST, handleGetPlaylist);
  yield takeLatest(GET_SEARCH_RESULT, handleGetSearchResult);
  yield takeLatest(GET_MORE_PLAYLIST_TRACKS, handleGetMorePlaylistTracks);
  yield takeLatest(GET_ALBUM, handleGetAlbum);
  yield takeLatest(GET_ARTIST, handleGetArtist);
  yield takeLatest(GET_LIBRARY_DATA, handleGetLibraryData);
  yield takeLatest(GET_MORE_LIBRARY_TRACKS, handleGetMoreLibraryTracks);
  yield takeLatest(GET_USER_TOP, handleGetUserTop);
  yield takeLatest(GET_CATEGORIES_LIST, handleGetCategoriesList);
  yield takeLatest(GET_CATEGORY_DATA, handleGetCategoryData);
  yield takeLatest(GET_REFRESH, handleGetRefresh);
}
