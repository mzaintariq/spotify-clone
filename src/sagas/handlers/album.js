import { call, put } from "redux-saga/effects";
import { setAlbum } from "../../actions";
import { requestGetAlbum } from "../requests/album";

export function* handleGetAlbum(action) {
  try {
    const response = yield call(requestGetAlbum, action.payload);
    yield put(setAlbum(response));
  } catch (error) {
    console.log(error);
  }
}
