const initialState = {
  featuredPlaylists: null
};

const featuredReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FEATURED":
      const data = action.payload;
      return {
        ...state,
        // featuredPlaylists: action.payload,
        featuredPlaylists: data.playlists,
        // featuredPlaylists: data.access_token,
      };
    default:
      return state;
  }
}

export default featuredReducer