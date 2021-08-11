import { call, put } from "redux-saga/effects";
import { setMoreLibraryTracks } from "../../actions";
import { requestGetMoreLibraryTracks } from "../requests/library_loadmore";

export function* handleGetMoreLibraryTracks(action) {
  try {
    const response = yield call(requestGetMoreLibraryTracks, action.payload);
    yield put(setMoreLibraryTracks(response));
  } catch (error) {
    console.log(error);
  }
}
