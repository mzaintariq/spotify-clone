import {
  GET_SEARCH_RESULT,
  SET_SEARCH,
  SET_SEARCH_TOGGLE,
} from "./actionTypes";

export const getSearchResult = (payload) => ({
  type: GET_SEARCH_RESULT,
  payload,
});

export const setSearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});

export const setSearchToggle = (payload) => ({
  type: SET_SEARCH_TOGGLE,
  payload,
});
