import { GET_USER_DATA, SET_USER_DATA } from "./actionTypes";

export const getUserData = (payload) => ({
  type: GET_USER_DATA,
  payload,
});

export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});
