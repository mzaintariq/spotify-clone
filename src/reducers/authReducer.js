const initialState = {
  // DELETE AFTER TESTING
  // accessToken: "BQBw_lorpSumr_P-Hq96527OOTje-goKBLk4tuFMNtJ3YhfukTuiVBjB_2setRsRbtcFXAjamsVrpvmajeqdlziL_ugueBGQYz-Ot3H4yYEdVuoN5f6GLcY56Gm6j-PctYu5SOubQDyl_4VDIqykDx2aCXq5ul_0Ig2_jea4ef0eGu58DVLWLRI",
  
  accessToken: null,
  expiresIn: null,
  refreshToken: null
  // data: null
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
        // data: action.payload
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