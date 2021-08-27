import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { browseReducer } from "./browseReducer";
import { playlistReducer } from "./playlistReducer";
import { currentReducer } from "./currentReducer";
import { searchReducer } from "./searchReducer";
import { albumReducer } from "./albumReducer";
import { artistReducer } from "./artistReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  browse: browseReducer,
  playlist: playlistReducer,
  current: currentReducer,
  search: searchReducer,
  album: albumReducer,
  artist: artistReducer,
});

export default rootReducer;
