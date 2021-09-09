import {
  GET_MORE_PLAYLIST_TRACKS,
  GET_PLAYLIST,
  SET_MORE_PLAYLIST_TRACKS,
  SET_PLAYLIST,
} from "./actionTypes";

export const getPlaylist = (payload) => ({
  type: GET_PLAYLIST,
  payload,
});

export const setPlaylist = (payload) => ({
  type: SET_PLAYLIST,
  payload,
});

export const getMorePlaylistTracks = (payload) => ({
  type: GET_MORE_PLAYLIST_TRACKS,
  payload,
});

export const setMorePlaylistTracks = (payload) => ({
  type: SET_MORE_PLAYLIST_TRACKS,
  payload,
});
