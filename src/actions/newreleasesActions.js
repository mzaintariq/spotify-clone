import { GET_NEW_RELEASES, SET_NEW_RELEASES } from "./actionTypes";

export const getNewReleases = (accessToken) => {
  return {
    type: GET_NEW_RELEASES,
    payload: accessToken,
  };
};

export const setNewReleases = (data) => {
  return {
    type: SET_NEW_RELEASES,
    payload: data,
  };
};
