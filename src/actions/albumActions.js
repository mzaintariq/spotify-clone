export const GET_ALBUM = "GET_ALBUM";

export const getAlbum = (accessToken) => {
  return {
    type: "GET_ALBUM",
    payload: accessToken,
  };
};

export const setAlbum = (data) => {
  return {
    type: "SET_ALBUM",
    payload: data,
  };
};
