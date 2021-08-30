import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./Profile.module.scss";
import Loading from "./Loading";
import SongRow from "./SongRow";
import PlaylistCard from "./PlaylistCard";
import ArtistCard from "./ArtistCard";
import { getUserTop } from "../actions";
import { accessTokenSelector } from "../reducers/authReducer";
import {
  userDataSelector,
  userPlaylistsSelector,
  userTopArtistsSelector,
  userTopTracksSelector,
} from "../reducers/userReducer";

import NoUserImage from "../assets/userImage.png";

function Profile() {
  const accessToken = useSelector(accessTokenSelector);
  const userData = useSelector(userDataSelector);
  const topTracks = useSelector(userTopTracksSelector);
  const topArtists = useSelector(userTopArtistsSelector);
  const playlists = useSelector(userPlaylistsSelector);
  const dispatch = useDispatch();

  const [showAll, setShowAll] = useState(false);
  const [showAllArtists, setShowAllArtists] = useState(false);
  const tracksLength = showAll ? topTracks.items.length : 5;
  const artistsLength = showAllArtists ? topArtists.items.length : 6;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUserTop(accessToken));
  }, [dispatch, accessToken]);

  const handleClick = () => {
    var showAll = document.getElementById("showAll");
    if (showAll.innerHTML === 'show all') {
      showAll.innerHTML = 'show less';
      setShowAll(true);
    } else {
      showAll.innerHTML = 'show all';
      setShowAll(false);
    }
  };

  const handleClickArtists = () => {
    var showAllArtists = document.getElementById("showAllArtists");
    if (showAllArtists.innerHTML === 'show all') {
      showAllArtists.innerHTML = 'show less';
      setShowAllArtists(true);
    } else {
      showAllArtists.innerHTML = 'show all';
      setShowAllArtists(false);
    }
  };

  return (
    <div>
      {userData ? (
        <div className={styles.profile__page}>
          <div className={styles.profile}>
            <div className={styles.profile__info}>
              {userData.images[0] ? (
                <img src={userData.images[0].url} alt="" />
              ) : (
                <img
                  className={styles.noArtistPic}
                  src={NoUserImage}
                  alt="NoUserPicture"
                />
              )}
              <div className={styles.profile__infoText}>
                <h4>PROFILE</h4>
                <h2>{userData.display_name}</h2>
                <p>
                  {userData.followers.total
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  followers
                </p>
              </div>
            </div>
          </div>

          <div className={styles.profile__songs}>
            <div className={styles.profile__songs__header}>
              <h2>Top Tracks</h2>
              <p id="showAll" onClick={() => handleClick()}>
                show all
              </p>
            </div>
            {topTracks ? (
              <div className={styles.profile__songList}>
                {topTracks.items.slice(0, tracksLength).map((item, index) => (
                  <SongRow
                    key={item.id}
                    track={item}
                    id={index}
                    type="single"
                  />
                ))}
              </div>
            ) : (
              <Loading />
            )}
          </div>

          <div className={styles.profile__artists}>
            <div className={styles.profile__songs__header}>
              <h2>Top Artists</h2>
              <p id="showAllArtists" onClick={() => handleClickArtists()}>
                show all
              </p>
            </div>
            {topArtists ? (
              <div className={styles.profile__artistGrid}>
                <Grid container justifyContent="flex-start" spacing={3}>
                  {topArtists.items.slice(0, artistsLength).map((item) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <ArtistCard data={item} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ) : (
              <Loading />
            )}
          </div>

          <div className={styles.profile__artists}>
            <h2>Public Playlists</h2>
            {playlists ? (
              <div className={styles.profile__artistGrid}>
                <Grid container justifyContent="flex-start" spacing={3}>
                  {playlists.items
                    .filter(
                      (item) =>
                        item.public === true &&
                        item.owner.display_name === userData.display_name
                    )
                    .map((item) => (
                      <Grid
                        key={item.id}
                        item
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        xl={2}
                      >
                        <PlaylistCard data={item} />
                      </Grid>
                    ))}
                </Grid>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Profile;
