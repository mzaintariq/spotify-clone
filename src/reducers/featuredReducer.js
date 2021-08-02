const initialState = {
  featuredPlaylists: null,
};

const featuredReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FEATURED":
      const data = action.payload;
      return {
        ...state,
        featuredPlaylists: data.playlists,
      };
    default:
      return state;
  }
};

export default featuredReducer;
