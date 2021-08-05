import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AlbumCard from "../albumCard/AlbumCard";
import PlaylistCard from "../playlistCard/PlaylistCard";
import SearchBar from "../searchBar/SearchBar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SongRow from "../songRow/SongRow";
import "./Search.scss";
import Home from "../home/Home";
import ArtistCard from "../artistCard/ArtistCard";
import { setSearchToggle } from "../../actions";

function Search() {
  const [track, setTrack] = useState();
  const [album, setAlbum] = useState();
  const [artist, setArtist] = useState();
  const [playlist, setPlaylist] = useState();
  const myState = useSelector((state) => state.searchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    handleToggles(myState.searchToggleValue);
  }, []);

  const handleToggles = (value) => {
    dispatch(setSearchToggle(value));
    setTrack(false);
    setAlbum(false);
    setArtist(false);
    setPlaylist(false);
    switch (value) {
      case "tracks":
        setTrack(true);
        break;
      case "albums":
        setAlbum(true);
        break;
      case "artists":
        setArtist(true);
        break;
      case "playlists":
        setPlaylist(true);
        break;
      default:
        break;
    }
  };

  const handleClick = (value) => {
    handleToggles(value);
  };

  return (
    <div className="searchpage">
      <div className="searchpage__header">
        <div className="searchpage__header__search">
          <SearchBar />
        </div>
        <div className="searchpage__toggle">
          <input id="tracks" name="toggle" type="radio" checked={track} />
          <label htmlFor="tracks" onClick={() => handleClick("tracks")}>
            <h4>Songs</h4>
          </label>
          <input id="albums" name="toggle" type="radio" checked={album} />
          <label htmlFor="albums" onClick={() => handleClick("albums")}>
            <h4>Albums</h4>
          </label>
          <input id="artists" name="toggle" type="radio" checked={artist} />
          <label htmlFor="artists" onClick={() => handleClick("artists")}>
            <h4>Artists</h4>
          </label>
          <input id="playlists" name="toggle" type="radio" checked={playlist} />
          <label htmlFor="playlists" onClick={() => handleClick("playlists")}>
            <h4>Playlists</h4>
          </label>
        </div>
      </div>

      {myState.searchValue ? (
        <div className="searchpage__body">
          {track ? (
            <div>
              {myState.searchTracks.total ? (
                <div>
                  <h2>Songs for "{myState.searchValue}"</h2>
                  <div className="searchpage__playlist__songs">
                    <div className="searchpage__playlist__header">
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
                      {myState.searchTracks.items.map((item, index) => (
                        <SongRow
                          key={item.id}
                          track={item}
                          id={index}
                          type="single"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="noresult">
                  <h2>No songs found for "{myState.searchValue}"</h2>
                  <h3>
                    Please make sure your words are spelled correctly or use
                    less or different keywords.
                  </h3>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}

          {album ? (
            <div>
              {myState.searchAlbums.total ? (
                <div>
                  <h2>Albums for "{myState.searchValue}"</h2>
                  <div className="grid">
                    <Grid container justifyContent="flex-start" spacing={3}>
                      {myState.searchAlbums.items.map((item, index) => (
                        <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                          <AlbumCard
                            data={item}
                            type="newreleases"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              ) : (
                <div className="noresult">
                  <h2>No albums found for "{myState.searchValue}"</h2>
                  <h3>
                    Please make sure your words are spelled correctly or use
                    less or different keywords.
                  </h3>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}

          {artist ? (
            <div>
              {myState.searchArtists.total ? (
                <div>
                  <h2>Artists for "{myState.searchValue}"</h2>
                  <div className="grid">
                    <Grid container justifyContent="flex-start" spacing={3}>
                      {myState.searchArtists.items.map((item, index) => (
                        <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                          <ArtistCard
                            data={item}
                            type="newreleases"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              ) : (
                <div className="noresult">
                  <h2>No artists found for "{myState.searchValue}"</h2>
                  <h3>
                    Please make sure your words are spelled correctly or use
                    less or different keywords.
                  </h3>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}

          {playlist ? (
            <div>
              {myState.searchPlaylists.total ? (
                <div>
                  <h2>Playlists for "{myState.searchValue}"</h2>
                  <div className="grid">
                    <Grid container justifyContent="flex-start" spacing={3}>
                      {myState.searchPlaylists.items.map((item, index) => (
                        <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                          <PlaylistCard data={item} />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              ) : (
                <div className="noresult">
                  <h2>No playlists found for "{myState.searchValue}"</h2>
                  <h3>
                    Please make sure your words are spelled correctly or use
                    less or different keywords.
                  </h3>
                </div>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="nosearch">
          <Home />
          {/* <h1>LANDING PAGE</h1> */}
        </div>
      )}
    </div>
  );
}

export default Search;
