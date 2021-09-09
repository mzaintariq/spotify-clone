import {
  GET_ARTIST,
  SET_ARTIST,
  SET_ARTIST_ALBUMS,
  SET_ARTIST_TOP_TRACKS,
} from "./actionTypes";

export const getArtist = (payload) => ({
  type: GET_ARTIST,
  payload,
});

export const setArtist = (payload) => ({
  type: SET_ARTIST,
  payload,
});

export const setArtistTopTracks = (payload) => ({
  type: SET_ARTIST_TOP_TRACKS,
  payload,
});

export const setArtistAlbums = (payload) => ({
  type: SET_ARTIST_ALBUMS,
  payload,
});
