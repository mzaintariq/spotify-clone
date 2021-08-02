import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import featuredReducer from "./featuredReducer";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  featuredReducer,
});

export default rootReducer;
