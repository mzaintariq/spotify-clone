import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

function Library() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.libraryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getLibraryData(myState.accessToken));
  }, [dispatch, myState.accessToken]);

  useEffect(() => {
    if (myState2.libraryTracks && myState2.libraryTracks.next) {
      dispatch(
        getMoreLibraryTracks([myState.accessToken, myState2.libraryTracks.next])
      );
    }
  }, [myState2.libraryTracks, dispatch, myState.accessToken]);

  const handleClick = (value) => {
    dispatch(setLibraryToggle(value));
  };

  // console.log(myState2)

  return (
    <div className="library">
      {/* <div>
        LIBRARY
        <h1>LIBRARY</h1>
      </div> */}
      <div className="library__header">
        <div className="library__toggle">
          <input
            id="tracks"
            name="toggle"
            type="radio"
            checked={myState2.libraryToggleValue === "tracks"}
            onChange={() => handleClick("tracks")}
          />
          <label htmlFor="tracks" onClick={() => handleClick("tracks")}>
            <h4>Songs</h4>
          </label>
          <input
            id="albums"
            name="toggle"
            type="radio"
            checked={myState2.libraryToggleValue === "albums"}
            onChange={() => handleClick("albums")}
          />
          <label htmlFor="albums" onClick={() => handleClick("albums")}>
            <h4>Albums</h4>
          </label>
          <input
            id="artists"
            name="toggle"
            type="radio"
            checked={myState2.libraryToggleValue === "artists"}
            onChange={() => handleClick("artists")}
          />
          <label htmlFor="artists" onClick={() => handleClick("artists")}>
            <h4>Artists</h4>
          </label>
          <input
            id="playlists"
            name="toggle"
            type="radio"
            checked={myState2.libraryToggleValue === "playlists"}
            onChange={() => handleClick("playlists")}
          />
          <label htmlFor="playlists" onClick={() => handleClick("playlists")}>
            <h4>Playlists</h4>
          </label>
        </div>
      </div>

      {myState2.libraryToggleValue === "tracks" ? (
        <div>
          {myState2.libraryTracks ? (
            <div>
              <h2 className="library__body__title">Songs</h2>
              <div className="library__playlist__songs">
                <div className="library__playlist__header">
                  <div className="playlist__header__left">
                    <div className="header__number">
                      <h4>#</h4>
                    </div>
                    <div className="header__title">
                      <h4>TITLE</h4>
                    </div>
                  </div>
                  <div className="header__icons">
                    <AccessTimeIcon className="time__icon" />
                  </div>
                </div>
                <hr className="playlist__line" />
                <div className="playlist__songList">
                  {myState2.libraryTracks.items.map((item, index) => (
                    <SongRow
                      key={item.id}
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

      {myState2.libraryToggleValue === "albums" ? (
        <div>
          {myState2.libraryAlbums ? (
            <div>
              <h2 className="library__body__title">Albums</h2>
              <div className="library__grid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {myState2.libraryAlbums.items.map((item, index) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
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

      {myState2.libraryToggleValue === "artists" ? (
        <div>
          {myState2.libraryArtists ? (
            <div>
              <h2 className="library__body__title">Artists</h2>
              <div className="library__grid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {myState2.libraryArtists.artists.items.map((item, index) => (
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

      {myState2.libraryToggleValue === "playlists" ? (
        <div>
          {myState2.libraryPlaylists ? (
            <div>
              <h2 className="library__body__title">Playlists</h2>
              <div className="library__grid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {myState2.libraryPlaylists.items.map((item, index) => (
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
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Library;
