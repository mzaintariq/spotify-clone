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

export const categorySelector = (state) => state.category;

export const categoryDataSelector = createSelector(
  categorySelector,
  (category) => {
    return category.categoryData;
  }
);

export const categoryPlaylistsSelector = createSelector(
  categorySelector,
  (category) => {
    return category.categoryPlaylists;
  }
);

export const categoryListSelector = createSelector(
  categorySelector,
  (category) => {
    return category.categoryList;
  }
);

export const isLoadingListSelector = createSelector(
  categorySelector,
  (category) => {
    return category.isLoadingList;
  }
);

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
