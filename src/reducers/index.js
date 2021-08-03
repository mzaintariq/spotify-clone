import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import browseReducer from "./browseReducer";
import playlistReducer from "./playlistReducer";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  browseReducer,
  playlistReducer,
});

export default rootReducer;
