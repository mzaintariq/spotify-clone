import { GET_USER_DATA, SET_USER_DATA } from "./actionTypes";

export const getUserData = (accessToken) => {
  return {
    type: GET_USER_DATA,
    payload: accessToken,
  };
};

export const setUserData = (data) => {
  return {
    type: SET_USER_DATA,
    payload: data,
  };
};
