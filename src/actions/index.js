import { GET_TOKEN, getToken, setToken } from "./authActions";
import { GET_USER_DATA, getUserData, setUserData } from "./userActions";
import { GET_FEATURED, getFeatured, setFeatured } from "./featuredActions";
import {
  GET_NEW_RELEASES,
  getNewReleases,
  setNewReleases,
} from "./newreleasesActions";
import {
  GET_PLAYLIST,
  GET_MORE_PLAYLIST_TRACKS,
  getPlaylist,
  setPlaylist,
  getMorePlaylistTracks,
  setMorePlaylistTracks,
} from "./playlistActions";
import {
  GET_SEARCH_RESULT,
  getSearchResult,
  setSearch,
  setSearchToggle,
} from "./searchActions";
import { setCurrent } from "./currentActions";

export { GET_TOKEN, getToken, setToken };
export { GET_USER_DATA, getUserData, setUserData };
export { GET_FEATURED, getFeatured, setFeatured };
export { GET_NEW_RELEASES, getNewReleases, setNewReleases };
export {
  GET_PLAYLIST,
  GET_MORE_PLAYLIST_TRACKS,
  getPlaylist,
  setPlaylist,
  getMorePlaylistTracks,
  setMorePlaylistTracks,
};
export { GET_SEARCH_RESULT, getSearchResult, setSearch, setSearchToggle };
export { setCurrent };
