import { call, put } from "redux-saga/effects";
import { setPlaylist } from "../../actions";
import { requestGetPlaylist } from "../requests/playlist";

export function* handleGetPlaylist(action) {
  try {
    const response = yield call(requestGetPlaylist, action.payload);
    yield put(setPlaylist(response));
  } catch (error) {
    console.log(error);
  }
}
