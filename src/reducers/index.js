import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { browseReducer } from "./browseReducer";
import { playlistReducer } from "./playlistReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  browse: browseReducer,
  playlist: playlistReducer,
});

export default rootReducer;
