export const GET_USER_DATA = "GET_USER_DATA";
export const GET_USER_TOP = "GET_USER_TOP";

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

export const getUserTop = (accessToken) => {
  return {
    type: "GET_USER_TOP",
    payload: accessToken,
  };
};

export const setUserTopTracks = (data) => {
  return {
    type: "SET_USER_TOP_TRACKS",
    payload: data,
  };
};

export const setUserTopArtists = (data) => {
  return {
    type: "SET_USER_TOP_ARTISTS",
    payload: data,
  };
};

export const setUserPlaylists = (data) => {
  return {
    type: "SET_USER_PLAYLISTS",
    payload: data,
  };
};
