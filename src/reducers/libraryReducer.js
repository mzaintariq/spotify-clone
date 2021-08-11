const initialState = {
  libraryToggleValue: "tracks",
  libraryAlbums: null,
  libraryTracks: null,
  libraryPlaylists: null,
  libraryArtists: null,
};

const libraryReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case "SET_LIBRARY_ALBUMS":
      return {
        ...state,
        libraryAlbums: data,
      };
    case "SET_LIBRARY_ARTISTS":
      return {
        ...state,
        libraryArtists: data,
      };
    case "SET_LIBRARY_TRACKS":
      return {
        ...state,
        libraryTracks: data,
      };
    case "SET_LIBRARY_PLAYLISTS":
      return {
        ...state,
        libraryPlaylists: data,
      };
    case "SET_LIBRARY_TOGGLE":
      return {
        ...state,
        libraryToggleValue: data,
      };
    case "SET_MORE_LIBRARY_TRACKS":
      return {
        ...state,
        libraryTracks: {
          ...state.libraryTracks,
          items: [...state.libraryTracks.items, ...data.items],
          next: data.next,
        },
      };
    default:
      return state;
  }
};

export default libraryReducer;
