import { createSelector } from "reselect";
import {
  SET_ARTIST,
  SET_ARTIST_ALBUMS,
  SET_ARTIST_TOP_TRACKS,
} from "../actions/actionTypes";

const initialState = {
  artistData: null,
  artistTopTracks: null,
  artistAlbums: null,
};

export const artistReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case SET_ARTIST:
      return {
        ...state,
        artistData: data,
      };
    case SET_ARTIST_TOP_TRACKS:
      return {
        ...state,
        artistTopTracks: data,
      };
    case SET_ARTIST_ALBUMS:
      return {
        ...state,
        artistAlbums: data,
      };
    default:
      return state;
  }
};

export const artistDataSelector = (state) => state.artist.artistData;

export const artistTopTracksSelector = (state) => state.artist.artistTopTracks;

export const artistAlbumsSelector = (state) => state.artist.artistAlbums;

export const artistAlbumSelector = createSelector(
  artistAlbumsSelector,
  (artistAlbumsSelector) => {
    return artistAlbumsSelector?.items.filter(
      (item) => item.album_group === "album"
    );
  }
);

export const artistSingleSelector = createSelector(
  artistAlbumsSelector,
  (artistAlbumsSelector) => {
    return artistAlbumsSelector?.items.filter(
      (item) => item.album_group === "single"
    );
  }
);

export const artistAppearsOnSelector = createSelector(
  artistAlbumsSelector,
  (artistAlbumsSelector) => {
    return artistAlbumsSelector?.items.filter(
      (item) => item.album_group === "appears_on"
    );
  }
);

export const isLoadingSelector = createSelector(
  artistDataSelector,
  artistTopTracksSelector,
  artistAlbumsSelector,
  (artistDataSelector, artistTopTracksSelector, artistAlbumsSelector) => {
    if (artistDataSelector && artistTopTracksSelector && artistAlbumsSelector) {
      return false;
    }
    return true;
  }
);
