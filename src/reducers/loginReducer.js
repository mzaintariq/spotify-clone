const initialState = {
  token: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}

export default loginReducer