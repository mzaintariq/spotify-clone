import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import browseReducer from "./browseReducer";
import playlistReducer from "./playlistReducer";
import currentReducer from "./currentReducer";
import searchReducer from "./searchReducer";
import albumReducer from "./albumReducer";
import artistReducer from "./artistReducer";
import libraryReducer from "./libraryReducer";

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  browseReducer,
  playlistReducer,
  currentReducer,
  searchReducer,
  albumReducer,
  artistReducer,
  libraryReducer,
});

export default rootReducer;
