import { GET_REFRESH, GET_TOKEN, SET_REFRESH, SET_TOKEN, LOGOUT } from "./actionTypes";

export const getToken = (code) => {
  return {
    type: GET_TOKEN,
    payload: code,
  };
};

export const setToken = (data) => {
  return {
    type: SET_TOKEN,
    payload: data,
  };
};

export const getRefresh = (refreshToken) => {
  return {
    type: GET_REFRESH,
    payload: refreshToken,
  };
};

export const setRefresh = (data) => {
  return {
    type: SET_REFRESH,
    payload: data,
  };
};

export const logout = {
  type: LOGOUT,
};
