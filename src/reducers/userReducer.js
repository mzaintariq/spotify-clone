const initialState = {
  userData: null,
  userTopTracks: null,
  userTopArtists: null,
  userPlaylists: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    case "SET_USER_TOP_TRACKS":
      return {
        ...state,
        userTopTracks: action.payload,
      };
    case "SET_USER_TOP_ARTISTS":
      return {
        ...state,
        userTopArtists: action.payload,
      };
    case "SET_USER_PLAYLISTS":
      return {
        ...state,
        userPlaylists: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
