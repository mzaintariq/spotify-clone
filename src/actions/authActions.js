import { GET_TOKEN, SET_TOKEN } from "./actionTypes";

export const getToken = (payload) => ({
  type: GET_TOKEN,
  payload,
});

export const setToken = (payload) => ({
  type: SET_TOKEN,
  payload,
});
