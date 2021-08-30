import { createSelector } from "reselect";
import {
  SET_USER_DATA,
  SET_USER_PLAYLISTS,
  SET_USER_TOP_ARTISTS,
  SET_USER_TOP_TRACKS,
} from "../actions";

const initialState = {
  userData: null,
  userTopTracks: null,
  userTopArtists: null,
  userPlaylists: null,
  isLoading: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        isLoading: false,
      };
    case SET_USER_TOP_TRACKS:
      return {
        ...state,
        userTopTracks: action.payload,
      };
    case SET_USER_TOP_ARTISTS:
      return {
        ...state,
        userTopArtists: action.payload,
      };
    case SET_USER_PLAYLISTS:
      return {
        ...state,
        userPlaylists: action.payload,
      };
    default:
      return state;
  }
};

export const userDataSelector = (state) => state.user.userData;

export const userTopTracksSelector = (state) => state.user.userTopTracks;

export const userTopArtistsSelector = (state) => state.user.userTopArtists;

export const userPlaylistsSelector = (state) => state.user.userPlaylists;

export const isLoadingSelector = (state) => state.user.isLoading;

export const isLoadingAllSelector = createSelector(
  userTopTracksSelector,
  userTopArtistsSelector,
  userPlaylistsSelector,
  (userTopTracks, userTopArtists, userPlaylists) => {
    if (userTopTracks && userTopArtists && userPlaylists) {
      return false;
    }
    return true;
  }
);
