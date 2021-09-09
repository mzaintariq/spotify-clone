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

export const albumDataSelector = (state) => state.album.albumData;

export const isLoadingSelector = (state) => state.album.isLoading;
