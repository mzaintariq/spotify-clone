const initialState = {
  artistData: null,
  artistTopTracks: null,
  artistAlbums: null,
};

const playlistReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case "SET_ARTIST":
      return {
        ...state,
        artistData: data,
      };
    case "SET_ARTIST_TOP_TRACKS":
      return {
        ...state,
        artistTopTracks: data,
      };
    case "SET_ARTIST_ALBUMS":
      return {
        ...state,
        artistAlbums: data,
      };
    default:
      return state;
  }
};

export default playlistReducer;
