const initialState = {
  // searchValue: null,
  searchValue: "",
  searchToggleValue: "tracks",
  searchAlbums: null,
  searchTracks: null,
  searchPlaylists: null,
  searchArtists: null,
};

const searchReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        searchValue: data[0],
        searchAlbums: data[1].albums,
        searchTracks: data[1].tracks,
        searchPlaylists: data[1].playlists,
        searchArtists: data[1].artists,
      };
    case "SET_SEARCH_TOGGLE":
      return {
        ...state,
        searchToggleValue: data,
      };
    default:
      return state;
  }
};

export default searchReducer;
