import { createSelector } from "reselect";

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

export const currentSelector = (state) => state.current;

export const currentArraySelector = createSelector(
  currentSelector,
  (current) => {
    return current.currentArray;
  }
);

export const currentNumberSelector = createSelector(
  currentSelector,
  (current) => {
    return current.currentNumber;
  }
);
