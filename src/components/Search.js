import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
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
  const searchToggleValue = useSelector((state) => state.searchReducer.searchToggleValue);
  const searchValue = useSelector((state) => state.searchReducer.searchValue);
  const searchTracks = useSelector((state) => state.searchReducer.searchTracks);
  const searchAlbums = useSelector((state) => state.searchReducer.searchAlbums);
  const searchArtists = useSelector((state) => state.searchReducer.searchArtists);
  const searchPlaylists = useSelector((state) => state.searchReducer.searchPlaylists);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setSearchToggle(searchToggleValue));
  }, [dispatch, searchToggleValue]);

  const handleClick = (value) => {
    dispatch(setSearchToggle(value));
  };

  return (
    <div className="searchpage">
      <div className="searchpage__header">
        <div className="searchpage__header__search">
          <SearchBar />
        </div>
        <div className="searchpage__toggle">
          <input id="tracks" name="toggle" type="radio" checked={searchToggleValue === "tracks"} onChange={() => handleClick("tracks")} />
          <label htmlFor="tracks" onClick={() => handleClick("tracks")}>
            <h4>Songs</h4>
          </label>
          <input id="albums" name="toggle" type="radio" checked={searchToggleValue === "albums"} onChange={() => handleClick("albums")} />
          <label htmlFor="albums" onClick={() => handleClick("albums")}>
            <h4>Albums</h4>
          </label>
          <input id="artists" name="toggle" type="radio" checked={searchToggleValue === "artists"} onChange={() => handleClick("artists")} />
          <label htmlFor="artists" onClick={() => handleClick("artists")}>
            <h4>Artists</h4>
          </label>
          <input id="playlists" name="toggle" type="radio" checked={searchToggleValue === "playlists"} onChange={() => handleClick("playlists")} />
          <label htmlFor="playlists" onClick={() => handleClick("playlists")}>
            <h4>Playlists</h4>
          </label>
        </div>
      </div>

      {searchValue ? (
        <div className="searchpage__body">
          {searchToggleValue === "tracks" ? (
            <div>
              {searchTracks.total ? (
                <div>
                  <h2 className="searchpage__body__title">Songs for "{searchValue}"</h2>
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
                      {searchTracks.items.map((item, index) => (
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
                  <h2>No songs found for "{searchValue}"</h2>
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

          {searchToggleValue === "albums" ? (
            <div>
              {searchAlbums.total ? (
                <div>
                  <h2 className="searchpage__body__title">Albums for "{searchValue}"</h2>
                  <div className="grid">
                    <Grid container justifyContent="flex-start" spacing={3}>
                      {searchAlbums.items.map((item, index) => (
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
                  <h2>No albums found for "{searchValue}"</h2>
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

          {searchToggleValue === "artists" ? (
            <div>
              {searchArtists.total ? (
                <div>
                  <h2 className="searchpage__body__title">Artists for "{searchValue}"</h2>
                  <div className="grid">
                    <Grid container justifyContent="flex-start" spacing={3}>
                      {searchArtists.items.map((item, index) => (
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
                  <h2>No artists found for "{searchValue}"</h2>
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

          {searchToggleValue === "playlists" ? (
            <div>
              {searchPlaylists.total ? (
                <div>
                  <h2 className="searchpage__body__title">Playlists for "{searchValue}"</h2>
                  <div className="grid">
                    <Grid container justifyContent="flex-start" spacing={3}>
                      {searchPlaylists.items.map((item, index) => (
                        <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                          <PlaylistCard data={item} />
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              ) : (
                <div className="noresult">
                  <h2>No playlists found for "{searchValue}"</h2>
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
