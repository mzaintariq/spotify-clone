import { GET_SEARCH_RESULT, SET_SEARCH, SET_SEARCH_TOGGLE } from "./actionTypes";

export const getSearchResult = (accessToken) => {
  return {
    type: GET_SEARCH_RESULT,
    payload: accessToken,
  };
};

export const setSearch = (data) => {
  return {
    type: SET_SEARCH,
    payload: data,
  };
};

export const setSearchToggle = (data) => {
  return {
    type: SET_SEARCH_TOGGLE,
    payload: data,
  };
};
