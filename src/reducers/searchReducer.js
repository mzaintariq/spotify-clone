import { createSelector } from "reselect";
import { SET_SEARCH, SET_SEARCH_TOGGLE } from "../actions";

const initialState = {
  searchValue: "",
  searchToggleValue: "tracks",
  searchAlbums: null,
  searchTracks: null,
  searchPlaylists: null,
  searchArtists: null,
};

export const searchReducer = (state = initialState, action) => {
  const data = action.payload;
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

export const searchSelector = (state) => state.search;

export const searchToggleValueSelector = createSelector(
  searchSelector,
  (search) => {
    return search.searchToggleValue;
  }
);

export const searchValueSelector = createSelector(searchSelector, (search) => {
  return search.searchValue;
});

export const searchTracksSelector = createSelector(searchSelector, (search) => {
  return search.searchTracks;
});

export const searchAlbumsSelector = createSelector(searchSelector, (search) => {
  return search.searchAlbums;
});

export const searchArtistsSelector = createSelector(
  searchSelector,
  (search) => {
    return search.searchArtists;
  }
);

export const searchPlaylistsSelector = createSelector(
  searchSelector,
  (search) => {
    return search.searchPlaylists;
  }
);
