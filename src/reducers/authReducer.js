const initialState = {
  accessToken: null,
  expiresIn: null,
  refreshToken: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      const data = action.payload;
      return {
        ...state,
        accessToken: data.access_token,
        expiresIn: data.expires_in,
        refreshToken: data.refresh_token
      };
    default:
      return state;
  }
}

export default authReducer