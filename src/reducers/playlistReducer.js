const initialState = {
  playlistData: null
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYLIST":
      const data = action.payload;
      return {
        ...state,
        playlistData: data,
      };
    default:
      return state;
  }
}

export default playlistReducer