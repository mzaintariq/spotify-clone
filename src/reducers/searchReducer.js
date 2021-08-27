import { SET_SEARCH, SET_SEARCH_TOGGLE } from "../actions";

const initialState = {
  // searchValue: null,
  searchValue: "",
  searchToggleValue: "tracks",
  searchAlbums: null,
  searchTracks: null,
  searchPlaylists: null,
  searchArtists: null,
};

export const searchReducer = (state = initialState, action) => {
  const data = action.payload;
  // const {} = data[1];
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchValue: data[0],
        searchAlbums: data[1].albums,
        searchTracks: data[1].tracks,
        searchPlaylists: data[1].playlists,
        searchArtists: data[1].artists,
      };
    case SET_SEARCH_TOGGLE:
      return {
        ...state,
        searchToggleValue: data,
      };
    default:
      return state;
  }
};

export const searchToggleValueSelector = (state) => state.search.searchToggleValue;

export const searchValueSelector = (state) => state.search.searchValue;

export const searchTracksSelector = (state) => state.search.searchTracks;

export const searchAlbumsSelector = (state) => state.search.searchAlbums;

export const searchArtistsSelector = (state) => state.search.searchArtists;

export const searchPlaylistsSelector = (state) => state.search.searchPlaylists;
