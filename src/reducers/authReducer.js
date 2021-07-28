const initialState = {
  // DELETE AFTER TESTING
  // accessToken: "BQBw_lorpSumr_P-Hq96527OOTje-goKBLk4tuFMNtJ3YhfukTuiVBjB_2setRsRbtcFXAjamsVrpvmajeqdlziL_ugueBGQYz-Ot3H4yYEdVuoN5f6GLcY56Gm6j-PctYu5SOubQDyl_4VDIqykDx2aCXq5ul_0Ig2_jea4ef0eGu58DVLWLRI",
  
  accessToken: null,
  expiresIn: null,
  refreshToken: null,

  check: null
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

    case "SET_CHECK":
        return {
          ...state,
          check: action.payload
        };
        
    default:
      return state;
  }
}

export default authReducer