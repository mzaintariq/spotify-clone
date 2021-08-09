const initialState = {
  albumData: null,
};

const albumReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case "SET_ALBUM":
      return {
        ...state,
        albumData: data,
      };
    default:
      return state;
  }
};

export default albumReducer;
