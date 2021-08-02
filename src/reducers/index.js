import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
// import featuredReducer from "./featuredReducer";
import browseReducer from "./browseReducer";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  browseReducer,
});

export default rootReducer;
