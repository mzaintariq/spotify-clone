import {
  GET_USER_DATA,
  GET_USER_PLAYLISTS,
  GET_USER_TOP_ARTISTS,
  GET_USER_TOP_TRACKS,
  SET_USER_DATA,
  SET_USER_PLAYLISTS,
  SET_USER_TOP_ARTISTS,
  SET_USER_TOP_TRACKS,
} from "./actionTypes";

export const getUserData = (payload) => ({
  type: GET_USER_DATA,
  payload,
});

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

export const getUserTopTracks = (payload) => ({
  type: GET_USER_TOP_TRACKS,
  payload,
});

export const setUserTopTracks = (payload) => ({
  type: SET_USER_TOP_TRACKS,
  payload,
});

export const getUserTopArtists = (payload) => ({
  type: GET_USER_TOP_ARTISTS,
  payload,
});

export const setUserTopArtists = (payload) => ({
  type: SET_USER_TOP_ARTISTS,
  payload,
});

export const setUserPlaylists = (payload) => ({
  type: SET_USER_PLAYLISTS,
  payload,
});

export const getUserPlaylists = (payload) => ({
  type: GET_USER_PLAYLISTS,
  payload,
});
