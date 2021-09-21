import { createSelector } from "reselect";
import { SET_MORE_PLAYLIST_TRACKS, SET_PLAYLIST } from "../actions";

const initialState = {
  playlistData: null,
  isLoading: true,
};

export const playlistReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlistData: action.payload,
        isLoading: false,
      };
    case SET_MORE_PLAYLIST_TRACKS:
      return {
        ...state,
        playlistData: {
          ...state.playlistData,
          tracks: {
            ...state.playlistData.tracks,
            items: [...state.playlistData.tracks.items, ...data.items],
            next: data.next,
          },
        },
      };
    default:
      return state;
  }
};

export const playlistSelector = (state) => state.playlist;

export const playlistDataSelector = createSelector(
  playlistSelector,
  (playlist) => {
    return playlist.playlistData;
  }
);

export const isLoadingSelector = createSelector(
  playlistSelector,
  (playlist) => {
    return playlist.isLoading;
  }
);

export const playlistTracksSelector = createSelector(
  playlistDataSelector,
  (playlistDataSelector) => {
    return playlistDataSelector?.tracks.items.filter((item) => item.track);
  }
);
