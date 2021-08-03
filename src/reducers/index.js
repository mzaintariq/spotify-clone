import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import browseReducer from "./browseReducer";
import playlistReducer from "./playlistReducer";
import currentReducer from "./currentReducer";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  browseReducer,
  playlistReducer,
  currentReducer,
});

export default rootReducer;
