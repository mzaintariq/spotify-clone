import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { browseReducer } from "./browseReducer";
import { playlistReducer } from "./playlistReducer";
import { currentReducer } from "./currentReducer";
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  browse: browseReducer,
  playlist: playlistReducer,
  current: currentReducer,
  search: searchReducer,
});

export default rootReducer;
