import { call, put } from "redux-saga/effects";
import { setMorePlaylistTracks } from "../../actions";
import { requestGetMorePlaylistTracks } from "../requests/playlist_loadmore";

export function* handleGetMorePlaylistTracks(action) {
  try {
    const response = yield call(requestGetMorePlaylistTracks, action.payload);
    yield put(setMorePlaylistTracks(response));
  } catch (error) {
    console.log(error);
  }
}
