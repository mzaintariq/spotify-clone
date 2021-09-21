import { createSelector } from "reselect";
import { SET_ALBUM } from "../actions";

const initialState = {
  albumData: null,
  isLoading: true,
};

export const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return {
        ...state,
        albumData: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const albumSelector = (state) => state.album;

export const albumDataSelector = createSelector(albumSelector, (album) => {
  return album.albumData;
});

export const isLoadingSelector = createSelector(albumSelector, (album) => {
  return album.isLoading;
});
