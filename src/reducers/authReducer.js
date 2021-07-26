const initialState = {
  accessToken: null,
  expiresIn: null,
  refreshToken: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload
      };
    case "SET_REFRESH_TOKEN":
      return {
        ...state,
        refreshToken: action.payload
      };
    case "SET_EXPIRES_IN":
      return {
        ...state,
        expiresIn: action.payload
      };
    default:
      return state;
  }
}

export default authReducer