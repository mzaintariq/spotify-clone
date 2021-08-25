import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import userReducer from "./userReducer";
import browseReducer from "./browseReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  userReducer,
  browseReducer,
});

export default rootReducer;