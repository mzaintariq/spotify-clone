import { call, put } from "redux-saga/effects";
import { setCategoriesList } from "../../actions";
import { requestGetCategoriesList } from "../requests/categoriesList";

export function* handleGetCategoriesList(action) {
  try {
    const response = yield call(requestGetCategoriesList, action.payload);
    yield put(setCategoriesList(response));
  } catch (error) {
    console.log(error);
  }
}
