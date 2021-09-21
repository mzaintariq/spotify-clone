import { createSelector } from "reselect";
import { SET_FEATURED, SET_NEW_RELEASES } from "../actions";

const initialState = {
  featuredPlaylists: null,
  newreleasesPlaylists: null,
  isLoadingFeatured: true,
  isLoadingNewreleases: true,
};

export const browseReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case SET_FEATURED:
      return {
        ...state,
        featuredPlaylists: data.playlists,
        isLoadingFeatured: false,
      };
    case SET_NEW_RELEASES:
      return {
        ...state,
        newreleasesPlaylists: data.albums,
        isLoadingNewreleases: false,
      };
    default:
      return state;
  }
};

export const browseSelector = (state) => state.browse;

export const featuredPlaylistSelector = createSelector(
  browseSelector,
  (browse) => {
    return browse.featuredPlaylists;
  }
);

export const newreleasesPlaylistSelector = createSelector(
  browseSelector,
  (browse) => {
    return browse.newreleasesPlaylists;
  }
);

const isLoadingFeaturedSelector = createSelector(browseSelector, (browse) => {
  return browse.isLoadingFeatured;
});

const isLoadingNewreleasesSelector = createSelector(
  browseSelector,
  (browse) => {
    return browse.isLoadingNewreleases;
  }
);

export const isLoadingSelector = createSelector(
  isLoadingFeaturedSelector,
  isLoadingNewreleasesSelector,
  (isLoadingFeaturedSelector, isLoadingNewreleasesSelector) => {
    return isLoadingFeaturedSelector || isLoadingNewreleasesSelector;
  }
);
