import { combineReducers } from "redux";
import authReducer from './authReducer';
import userReducer from './userReducer';
import featuredReducer from './featuredReducer';
import playlistReducer from './playlistReducer';

const rootReducer = combineReducers({
  authReducer,
  userReducer,
  featuredReducer,
  playlistReducer
});

export default rootReducer;