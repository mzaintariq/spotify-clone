import {
  GET_ARTIST,
  GET_ARTIST_ALBUMS,
  GET_ARTIST_TOP_TRACKS,
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

export const getArtistTopTracks = (payload) => ({
  type: GET_ARTIST_TOP_TRACKS,
  payload,
});

export const setArtistTopTracks = (payload) => ({
  type: SET_ARTIST_TOP_TRACKS,
  payload,
});

export const getArtistAlbums = (payload) => ({
  type: GET_ARTIST_ALBUMS,
  payload,
});

export const setArtistAlbums = (payload) => ({
  type: SET_ARTIST_ALBUMS,
  payload,
});
