import { createSelector } from "reselect";

import {
  SET_CATEGORY_DATA,
  SET_CATEGORY_LIST,
  SET_CATEGORY_PLAYLISTS,
} from "../actions";

const initialState = {
  categoryData: null,
  categoryPlaylists: null,
  categoryList: null,
  isLoadingList: true,
};

export const categoryReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case SET_CATEGORY_DATA:
      return {
        ...state,
        categoryData: data,
      };
    case SET_CATEGORY_PLAYLISTS:
      return {
        ...state,
        categoryPlaylists: data.playlists,
      };
    case SET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: data.categories,
        isLoadingList: false,
      };
    default:
      return state;
  }
};

export const categoryDataSelector = (state) => state.category.categoryData;

export const categoryPlaylistsSelector = (state) =>
  state.category.categoryPlaylists;

export const categoryListSelector = (state) => state.category.categoryList;

export const isLoadingListSelector = (state) => state.category.isLoadingList;

export const isLoadingSelector = createSelector(
  categoryDataSelector,
  categoryPlaylistsSelector,
  (categoryData, categoryPlaylists) => {
    if (categoryData && categoryPlaylists) {
      return false;
    }
    return true;
  }
);