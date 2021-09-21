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

export const librarySelector = (state) => state.library;

export const libraryToggleValueSelector = createSelector(
  librarySelector,
  (library) => {
    return library.libraryToggleValue;
  }
);

export const libraryAlbumsSelector = createSelector(
  librarySelector,
  (library) => {
    return library.libraryAlbums;
  }
);

export const libraryTracksSelector = createSelector(
  librarySelector,
  (library) => {
    return library.libraryTracks;
  }
);

export const libraryPlaylistsSelector = createSelector(
  librarySelector,
  (library) => {
    return library.libraryPlaylists;
  }
);

export const libraryArtistsSelector = createSelector(
  librarySelector,
  (library) => {
    return library.libraryArtists;
  }
);

export const isLoadingAlbumsSelector = createSelector(
  libraryAlbumsSelector,
  (libraryAlbums) => {
    return !libraryAlbums;
  }
);

export const isLoadingArtistsSelector = createSelector(
  libraryArtistsSelector,
  (libraryArtists) => {
    return !libraryArtists;
  }
);

export const isLoadingTracksSelector = createSelector(
  libraryTracksSelector,
  (libraryTracks) => {
    return !libraryTracks;
  }
);

export const isLoadingPlaylistsSelector = createSelector(
  libraryPlaylistsSelector,
  (libraryPlaylists) => {
    return !libraryPlaylists;
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
