import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getLibraryData,
  getMoreLibraryTracks,
  setLibraryToggle,
} from "../../actions";
import SongRow from "../songRow/SongRow";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./Library.scss";
import Loading from "../loading/Loading";
import { Grid } from "@material-ui/core";
import AlbumCard from "../albumCard/AlbumCard";
import ArtistCard from "../artistCard/ArtistCard";
import PlaylistCard from "../playlistCard/PlaylistCard";
import {
  accessTokenSelector,
  savedLibraryPlaylistsSelector,
  publicLibraryPlaylistsSelector,
  privateLibraryPlaylistsSelector,
} from "../../reselect/selectors";

function Library({
  accessToken,
  libraryTracks,
  libraryToggleValue,
  libraryAlbums,
  libraryArtists,
  publicLibraryPlaylists,
  privateLibraryPlaylists,
  savedLibraryPlaylists,
  getLibraryData,
  getMoreLibraryTracks,
  setLibraryToggle,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    getLibraryData(accessToken);
  }, [getLibraryData, accessToken]);

  useEffect(() => {
    if (libraryTracks && libraryTracks.next) {
      getMoreLibraryTracks([accessToken, libraryTracks.next]);
    }
  }, [libraryTracks, getMoreLibraryTracks, accessToken]);

  const handleClick = (value) => {
    setLibraryToggle(value);
  };

  return (
    <div className="library">
      <div className="library__header">
        <div className="library__toggle">
          <input
            id="tracks"
            name="toggle"
            type="radio"
            checked={libraryToggleValue === "tracks"}
            onChange={() => handleClick("tracks")}
          />
          <label htmlFor="tracks" onClick={() => handleClick("tracks")}>
            <h4>Songs</h4>
          </label>
          <input
            id="albums"
            name="toggle"
            type="radio"
            checked={libraryToggleValue === "albums"}
            onChange={() => handleClick("albums")}
          />
          <label htmlFor="albums" onClick={() => handleClick("albums")}>
            <h4>Albums</h4>
          </label>
          <input
            id="artists"
            name="toggle"
            type="radio"
            checked={libraryToggleValue === "artists"}
            onChange={() => handleClick("artists")}
          />
          <label htmlFor="artists" onClick={() => handleClick("artists")}>
            <h4>Artists</h4>
          </label>
          <input
            id="playlists"
            name="toggle"
            type="radio"
            checked={libraryToggleValue === "playlists"}
            onChange={() => handleClick("playlists")}
          />
          <label htmlFor="playlists" onClick={() => handleClick("playlists")}>
            <h4>Playlists</h4>
          </label>
        </div>
      </div>

      {libraryToggleValue === "tracks" ? (
        <div>
          {libraryTracks ? (
            <div>
              <h2 className="library__body__title">Songs</h2>
              <div className="library__playlist__songs">
                <div className="library__playlist__header">
                  <div className="library__playlist__header__left">
                    <div className="library__header__number">
                      <h4>#</h4>
                    </div>
                    <div className="library__header__title">
                      <h4>TITLE</h4>
                    </div>
                  </div>
                  <div className="library__header__icons">
                    <AccessTimeIcon className="time__icon" />
                  </div>
                </div>
                <hr className="library__playlist__line" />
                <div className="library__playlist__songList">
                  {libraryTracks.items.map((item, index) => (
                    <SongRow
                      key={index}
                      track={item.track}
                      id={index}
                      type="library"
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <></>
      )}

      {libraryToggleValue === "albums" ? (
        <div>
          {libraryAlbums ? (
            <div>
              <h2 className="library__body__title">Albums</h2>
              <div className="library__grid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {libraryAlbums.items.map((item, index) => (
                    <Grid key={index} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <AlbumCard data={item.album} type="newreleases" />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <></>
      )}

      {libraryToggleValue === "artists" ? (
        <div>
          {libraryArtists ? (
            <div>
              <h2 className="library__body__title">Artists</h2>
              <div className="library__grid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {libraryArtists.artists.items.map((item, index) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <ArtistCard data={item} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      ) : (
        <></>
      )}

      {libraryToggleValue === "playlists" ? (
        <div>
          {publicLibraryPlaylists ? (
            <div>
              {publicLibraryPlaylists.length > 0 ? (
                <h2 className="library__body__title">Public Playlists</h2>
              ) : (
                <></>
              )}
              <div className="library__grid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {publicLibraryPlaylists.map((item, index) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <PlaylistCard data={item} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          ) : (
            <Loading />
          )}
          {privateLibraryPlaylists ? (
            <div>
              {privateLibraryPlaylists.length > 0 ? (
                <h2 className="library__body__title">Private Playlists</h2>
              ) : (
                <></>
              )}
              <div className="library__grid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {privateLibraryPlaylists.map((item, index) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <PlaylistCard data={item} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          ) : (
            <></>
          )}
          {savedLibraryPlaylists ? (
            <div>
              {savedLibraryPlaylists.length > 0 ? (
                <h2 className="library__body__title">Saved Playlists</h2>
              ) : (
                <></>
              )}
              <div className="library__grid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {savedLibraryPlaylists.map((item, index) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <PlaylistCard data={item} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    accessToken: accessTokenSelector(state),
    libraryTracks: state.libraryReducer.libraryTracks,
    libraryToggleValue: state.libraryReducer.libraryToggleValue,
    libraryAlbums: state.libraryReducer.libraryAlbums,
    libraryArtists: state.libraryReducer.libraryArtists,
    savedLibraryPlaylists: savedLibraryPlaylistsSelector(state),
    publicLibraryPlaylists: publicLibraryPlaylistsSelector(state),
    privateLibraryPlaylists: privateLibraryPlaylistsSelector(state),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLibraryData: (accessToken) => dispatch(getLibraryData(accessToken)),
    getMoreLibraryTracks: (data) => dispatch(getMoreLibraryTracks(data)),
    setLibraryToggle: (value) => dispatch(setLibraryToggle(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Library);
