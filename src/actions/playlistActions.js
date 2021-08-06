export const GET_PLAYLIST = "GET_PLAYLIST";
export const GET_MORE_PLAYLIST_TRACKS = "GET_MORE_PLAYLIST_TRACKS";

export const getPlaylist = (accessToken) => {
  return {
    type: "GET_PLAYLIST",
    payload: accessToken,
  };
};

export const setPlaylist = (data) => {
  return {
    type: "SET_PLAYLIST",
    payload: data,
  };
};

export const getMorePlaylistTracks = (accessToken) => {
  return {
    type: "GET_MORE_PLAYLIST_TRACKS",
    payload: accessToken,
  };
};

export const setMorePlaylistTracks = (data) => {
  return {
    type: "SET_MORE_PLAYLIST_TRACKS",
    payload: data,
  };
};
