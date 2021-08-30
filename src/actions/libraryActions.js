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

export const getLibraryData = (accessToken) => {
  return {
    type: GET_LIBRARY_DATA,
    payload: accessToken,
  };
};

export const setLibraryAlbums = (data) => {
  return {
    type: SET_LIBRARY_ALBUMS,
    payload: data,
  };
};

export const setLibraryArtists = (data) => {
  return {
    type: SET_LIBRARY_ARTISTS,
    payload: data,
  };
};

export const setLibraryTracks = (data) => {
  return {
    type: SET_LIBRARY_TRACKS,
    payload: data,
  };
};

export const setLibraryPlaylists = (data) => {
  return {
    type: SET_LIBRARY_PLAYLISTS,
    payload: data,
  };
};

export const setLibraryToggle = (data) => {
  return {
    type: SET_LIBRARY_TOGGLE,
    payload: data,
  };
};

export const getMoreLibraryTracks = (accessToken) => {
  return {
    type: GET_MORE_LIBRARY_TRACKS,
    payload: accessToken,
  };
};

export const setMoreLibraryTracks = (data) => {
  return {
    type: SET_MORE_LIBRARY_TRACKS,
    payload: data,
  };
};