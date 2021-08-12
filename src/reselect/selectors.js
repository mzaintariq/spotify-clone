import { createSelector } from "reselect";

export const accessTokenSelector = (state) => state.authReducer.accessToken;

const libraryPlaylistsSelector = (state) =>
  state.libraryReducer.libraryPlaylists;
const userSelector = (state) => state.userReducer.userData;

export const savedLibraryPlaylistsSelector = createSelector(
  libraryPlaylistsSelector,
  userSelector,
  (libraryPlaylists, userData) => {
    if (libraryPlaylists) {
      return libraryPlaylists.items.filter((playlist) => {
        return playlist.owner.display_name !== userData.display_name;
      });
    }
    return null;
  }
);

export const publicLibraryPlaylistsSelector = createSelector(
  libraryPlaylistsSelector,
  userSelector,
  (libraryPlaylists, userData) => {
    if (libraryPlaylists) {
      return libraryPlaylists.items.filter((playlist) => {
        return (
          playlist.public === true &&
          playlist.owner.display_name === userData.display_name
        );
      });
    }
    return null;
  }
);

export const privateLibraryPlaylistsSelector = createSelector(
  libraryPlaylistsSelector,
  userSelector,
  (libraryPlaylists, userData) => {
    if (libraryPlaylists) {
      return libraryPlaylists.items.filter((playlist) => {
        return (
          playlist.public === false &&
          playlist.owner.display_name === userData.display_name
        );
      });
    }
    return null;
  }
);
