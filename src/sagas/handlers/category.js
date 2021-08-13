import { call, put } from "redux-saga/effects";
import { setCategoryData, setCategoryPlaylists } from "../../actions";
import { requestGetCategoryData, requestGetCategoryPlaylists } from "../requests/category";

export function* handleGetCategoryData(action) {
  try {
    const data = yield call(requestGetCategoryData, action.payload);
    const playlists = yield call(requestGetCategoryPlaylists, action.payload);
    yield put(setCategoryData(data));
    yield put(setCategoryPlaylists(playlists));
  } catch (error) {
    console.log(error);
  }
}
