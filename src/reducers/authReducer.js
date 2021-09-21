import { createSelector } from "reselect";
import { SET_REFRESH, SET_TOKEN } from "../actions";

const initialState = {
  accessToken: null,
  expiresIn: null,
  refreshToken: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      const { access_token, expires_in, refresh_token } = action.payload;
      return {
        ...state,
        accessToken: access_token,
        expiresIn: expires_in,
        refreshToken: refresh_token,
      };
    case SET_REFRESH:
      const data = action.payload;
      return {
        ...state,
        accessToken: data.access_token,
        expiresIn: data.expires_in,
      };
    default:
      return state;
  }
};

export const authSelector = (state) => state.auth;

export const accessTokenSelector = createSelector(authSelector, (auth) => {
  return auth.accessToken;
});

export const refreshTokenSelector = createSelector(authSelector, (auth) => {
  return auth.refreshToken;
});

export const expiresInSelector = createSelector(authSelector, (auth) => {
  return auth.expiresIn;
});
