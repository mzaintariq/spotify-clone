const initialState = {
  currentArray: null,
  currentNumber: null,
};

export const currentReducer = (state = initialState, action) => {
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

export const currentArraySelector = (state) => state.current.currentArray;

export const currentNumberSelector = (state) => state.current.currentNumber;
