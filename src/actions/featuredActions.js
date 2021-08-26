import { GET_FEATURED, SET_FEATURED } from "./actionTypes";

export const getFeatured = (accessToken) => {
  return {
    type: GET_FEATURED,
    payload: accessToken,
  };
};

export const setFeatured = (data) => {
  return {
    type: SET_FEATURED,
    payload: data,
  };
};
