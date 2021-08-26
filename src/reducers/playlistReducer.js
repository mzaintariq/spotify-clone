import { SET_PLAYLIST } from "../actions";

const initialState = {
  playlistData: null,
  isLoading: true,
};

export const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlistData: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const playlistDataSelector = (state) => state.playlist.playlistData;

export const isLoadingSelector = (state) => state.playlist.isLoading;
