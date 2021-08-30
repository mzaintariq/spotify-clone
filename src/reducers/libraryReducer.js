import { createSelector } from "reselect";

import {
  SET_LIBRARY_ALBUMS,
  SET_LIBRARY_ARTISTS,
  SET_LIBRARY_PLAYLISTS,
  SET_LIBRARY_TOGGLE,
  SET_LIBRARY_TRACKS,
  SET_MORE_LIBRARY_TRACKS,
} from "../actions";
import { userDataSelector } from "./userReducer";

const initialState = {
  libraryToggleValue: "tracks",
  libraryAlbums: null,
  libraryTracks: null,
  libraryPlaylists: null,
  libraryArtists: null,
};

export const libraryReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case SET_LIBRARY_ALBUMS:
      return {
        ...state,
        libraryAlbums: data,
      };
    case SET_LIBRARY_ARTISTS:
      return {
        ...state,
        libraryArtists: data,
      };
    case SET_LIBRARY_TRACKS:
      return {
        ...state,
        libraryTracks: data,
      };
    case SET_LIBRARY_PLAYLISTS:
      return {
        ...state,
        libraryPlaylists: data,
      };
    case SET_LIBRARY_TOGGLE:
      return {
        ...state,
        libraryToggleValue: data,
      };
    case SET_MORE_LIBRARY_TRACKS:
      return {
        ...state,
        libraryTracks: {
          ...state.libraryTracks,
          items: [...state.libraryTracks.items, ...data.items],
          next: data.next,
        },
      };
    default:
      return state;
  }
};

export const libraryToggleValueSelector = (state) =>
  state.library.libraryToggleValue;

export const libraryAlbumsSelector = (state) => state.library.libraryAlbums;

export const libraryTracksSelector = (state) => state.library.libraryTracks;

export const libraryPlaylistsSelector = (state) =>
  state.library.libraryPlaylists;

export const libraryArtistsSelector = (state) => state.library.libraryArtists;

export const isLoadingSelector = createSelector(
  libraryAlbumsSelector,
  libraryTracksSelector,
  libraryPlaylistsSelector,
  libraryArtistsSelector,
  (libraryAlbums, libraryTracks, libraryPlaylists, libraryArtists) => {
    if (libraryAlbums && libraryTracks && libraryPlaylists && libraryArtists) {
      return false;
    }
    return true;
  }
);

export const savedLibraryPlaylistsSelector = createSelector(
  libraryPlaylistsSelector,
  userDataSelector,
  (libraryPlaylists, userData) => {
    if (libraryPlaylists) {
      return libraryPlaylists.items.filter((playlist) => {
        return playlist.owner.display_name !== userData.display_name;
      });
    }
    return null;
  }
);

export const publicLibraryPlaylistsSelector = createSelector(
  libraryPlaylistsSelector,
  userDataSelector,
  (libraryPlaylists, userData) => {
    if (libraryPlaylists) {
      return libraryPlaylists.items.filter((playlist) => {
        return (
          playlist.public === true &&
          playlist.owner.display_name === userData.display_name
        );
      });
    }
    return null;
  }
);

export const privateLibraryPlaylistsSelector = createSelector(
  libraryPlaylistsSelector,
  userDataSelector,
  (libraryPlaylists, userData) => {
    if (libraryPlaylists) {
      return libraryPlaylists.items.filter((playlist) => {
        return (
          playlist.public === false &&
          playlist.owner.display_name === userData.display_name
        );
      });
    }
    return null;
  }
);
