const initialState = {
  currentPlaying: null,
};

const currentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT":
      const data = action.payload;
      return {
        ...state,
        currentPlaying: data,
      };
    default:
      return state;
  }
};

export default currentReducer;
