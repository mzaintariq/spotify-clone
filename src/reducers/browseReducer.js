const initialState = {
  featuredPlaylists: null,
  newreleasesPlaylists: null,
  categoriesList: null,
};

const browseReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case "SET_FEATURED":
      return {
        ...state,
        featuredPlaylists: data.playlists,
      };
    case "SET_NEW_RELEASES":
      return {
        ...state,
        newreleasesPlaylists: data.albums,
      };
    case "SET_CATEGORIES_LIST":
      return {
        ...state,
        categoriesList: data.categories,
      };
    default:
      return state;
  }
};

export default browseReducer;
