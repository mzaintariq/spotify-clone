const initialState = {
  searchValue: null,
  searchResult: null,
};

const searchReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        searchValue: data[0],
        searchResult: data[1],
      };
    default:
      return state;
  }
};

export default searchReducer;
