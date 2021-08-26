import { SET_USER_DATA } from "../actions";

const initialState = {
  userData: null,
  isLoading: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const userDataSelector = (state) => state.user.userData;

export const isLoadingSelector = (state) => state.user.isLoading;
