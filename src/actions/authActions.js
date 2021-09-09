import {
  GET_REFRESH,
  GET_TOKEN,
  SET_REFRESH,
  SET_TOKEN,
  LOGOUT,
} from "./actionTypes";

export const getToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

export const setToken = (payload) => ({
  type: SET_TOKEN,
  payload,
});

export const getRefresh = (payload) => ({
  type: GET_REFRESH,
  payload,
});

export const setRefresh = (payload) => ({
  type: SET_REFRESH,
  payload,
});

export const logout = {
  type: LOGOUT,
};
