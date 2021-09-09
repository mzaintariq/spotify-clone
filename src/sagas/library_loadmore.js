import { call, put, takeLatest } from "redux-saga/effects";

import { GET_MORE_LIBRARY_TRACKS, setMoreLibraryTracks } from "../actions";
import { requestGetMoreLibraryTracks } from "../services/api";

function* getMoreLibraryTracks(action) {
  try {
    const response = yield call(requestGetMoreLibraryTracks, action.payload);
    yield put(setMoreLibraryTracks(response));
  } catch (error) {
    console.log(error);
  }
}

export function* getMoreLibraryTracksSaga() {
  yield takeLatest(GET_MORE_LIBRARY_TRACKS, getMoreLibraryTracks);
}
