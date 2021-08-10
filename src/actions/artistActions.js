export const GET_ARTIST = "GET_ARTIST";

export const getArtist = (accessToken) => {
  return {
    type: "GET_ARTIST",
    payload: accessToken,
  };
};

export const setArtist = (data) => {
  return {
    type: "SET_ARTIST",
    payload: data,
  };
};

export const setArtistTopTracks = (data) => {
  return {
    type: "SET_ARTIST_TOP_TRACKS",
    payload: data,
  };
};

export const setArtistAlbums = (data) => {
  return {
    type: "SET_ARTIST_ALBUMS",
    payload: data,
  };
};
