import { GET_ALBUM, SET_ALBUM } from "./actionTypes";

export const getAlbum = (payload) => ({
  type: GET_ALBUM,
  payload,
});

export const setAlbum = (payload) => ({
  type: SET_ALBUM,
  payload,
});
