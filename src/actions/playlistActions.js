import { GET_PLAYLIST, SET_PLAYLIST } from "./actionTypes";

export const getPlaylist = (accessToken) => {
  return {
    type: GET_PLAYLIST,
    payload: accessToken,
  };
};

export const setPlaylist = (data) => {
  return {
    type: SET_PLAYLIST,
    payload: data,
  };
};
