import { GET_ALBUM, SET_ALBUM } from "./actionTypes";

export const getAlbum = (accessToken) => {
  return {
    type: GET_ALBUM,
    payload: accessToken,
  };
};

export const setAlbum = (data) => {
  return {
    type: SET_ALBUM,
    payload: data,
  };
};
