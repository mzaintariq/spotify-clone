const initialState = {
  accessToken: null,
  expiresIn: null,
  refreshToken: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      const { access_token, expires_in, refresh_token } = action.payload;
      return {
        ...state,
        accessToken: access_token,
        expiresIn: expires_in,
        refreshToken: refresh_token,
      };
    default:
      return state;
  }
};

export const accessTokenSelector = (state) => state.auth.accessToken;

export const refreshTokenSelector = (state) => state.auth.refreshToken;

export const expiresInSelector = (state) => state.auth.expiresIn;
