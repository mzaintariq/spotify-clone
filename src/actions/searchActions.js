export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT";

export const getSearchResult = (accessToken) => {
  return {
    type: "GET_SEARCH_RESULT",
    payload: accessToken,
  };
};

export const setSearch = (data) => {
  return {
    type: "SET_SEARCH",
    payload: data,
  };
};

export const setSearchToggle = (data) => {
  return {
    type: "SET_SEARCH_TOGGLE",
    payload: data,
  };
};
