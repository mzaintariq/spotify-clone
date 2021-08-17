const initialState = {
  accessToken: null,
  expiresIn: null,
  refreshToken: null,
};

const authReducer = (state = initialState, action) => {
  const data = action.payload;
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        accessToken: data.access_token,
        expiresIn: data.expires_in,
        refreshToken: data.refresh_token,
      };
    case "SET_REFRESH":
      return {
        ...state,
        accessToken: data.access_token,
        expiresIn: data.expires_in,
      };
    default:
      return state;
  }
};

export default authReducer;
