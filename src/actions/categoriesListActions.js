export const GET_CATEGORIES_LIST = "GET_CATEGORIES_LIST";

export const getCategoriesList = (accessToken) => {
  return {
    type: "GET_CATEGORIES_LIST",
    payload: accessToken,
  };
};

export const setCategoriesList = (data) => {
  return {
    type: "SET_CATEGORIES_LIST",
    payload: data,
  };
};
