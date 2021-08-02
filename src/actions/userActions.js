export const GET_USER_DATA = "GET_USER_DATA";

export const getUserData = (accessToken) => {
  return {
    type: "GET_USER_DATA",
    payload: accessToken,
  };
};

export const setUserData = (data) => {
  return {
    type: "SET_USER_DATA",
    payload: data,
  };
};
