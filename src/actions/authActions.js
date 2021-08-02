export const GET_TOKEN = "GET_TOKEN";

export const getToken = (code) => {
  return {
    type: "GET_TOKEN",
    payload: code,
  };
};

export const setToken = (data) => {
  return {
    type: "SET_TOKEN",
    payload: data,
  };
};
