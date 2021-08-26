import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { browseReducer } from "./browseReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  browse: browseReducer,
});

export default rootReducer;