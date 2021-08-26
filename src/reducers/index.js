import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { browseReducer } from "./browseReducer";
import { playlistReducer } from "./playlistReducer";
import { currentReducer } from "./currentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  browse: browseReducer,
  playlist: playlistReducer,
  current: currentReducer,
});

export default rootReducer;
