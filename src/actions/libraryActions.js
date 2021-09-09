import {
  GET_LIBRARY_DATA,
  GET_MORE_LIBRARY_TRACKS,
  SET_LIBRARY_ALBUMS,
  SET_LIBRARY_ARTISTS,
  SET_LIBRARY_PLAYLISTS,
  SET_LIBRARY_TOGGLE,
  SET_LIBRARY_TRACKS,
  SET_MORE_LIBRARY_TRACKS,
} from "./actionTypes";

export const getLibraryData = (payload) => ({
  type: GET_LIBRARY_DATA,
  payload,
});

export const setLibraryAlbums = (payload) => ({
  type: SET_LIBRARY_ALBUMS,
  payload,
});

export const setLibraryArtists = (payload) => ({
  type: SET_LIBRARY_ARTISTS,
  payload,
});

export const setLibraryTracks = (payload) => ({
  type: SET_LIBRARY_TRACKS,
  payload,
});

export const setLibraryPlaylists = (payload) => ({
  type: SET_LIBRARY_PLAYLISTS,
  payload,
});

export const setLibraryToggle = (payload) => ({
  type: SET_LIBRARY_TOGGLE,
  payload,
});

export const getMoreLibraryTracks = (payload) => ({
  type: GET_MORE_LIBRARY_TRACKS,
  payload,
});

export const setMoreLibraryTracks = (payload) => ({
  type: SET_MORE_LIBRARY_TRACKS,
  payload,
});
