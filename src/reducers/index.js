import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { userReducer } from "./userReducer";
import { browseReducer } from "./browseReducer";
import { playlistReducer } from "./playlistReducer";
import { currentReducer } from "./currentReducer";
import { searchReducer } from "./searchReducer";
import { albumReducer } from "./albumReducer";
import { artistReducer } from "./artistReducer";
import { libraryReducer } from "./libraryReducer";
import { categoryReducer } from "./categoryReducer";
import { LOGOUT } from "../actions";

const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  browse: browseReducer,
  playlist: playlistReducer,
  current: currentReducer,
  search: searchReducer,
  album: albumReducer,
  artist: artistReducer,
  library: libraryReducer,
  category: categoryReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
