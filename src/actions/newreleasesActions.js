import { GET_NEW_RELEASES, SET_NEW_RELEASES } from "./actionTypes";

export const getNewReleases = (payload) => ({
  type: GET_NEW_RELEASES,
  payload,
});

export const setNewReleases = (payload) => ({
  type: SET_NEW_RELEASES,
  payload,
});
