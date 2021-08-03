const initialState = {
  currentArray: null,
  currentNumber: null,
};

const currentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT":
      const data = action.payload;
      return {
        ...state,
        currentArray: data[0],
        currentNumber: data[1],
      };
    default:
      return state;
  }
};

export default currentReducer;
