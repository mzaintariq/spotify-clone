import { GET_FEATURED, SET_FEATURED } from "./actionTypes";

export const getFeatured = (payload) => ({
  type: GET_FEATURED,
  payload,
});

export const setFeatured = (payload) => ({
  type: SET_FEATURED,
  payload,
});
