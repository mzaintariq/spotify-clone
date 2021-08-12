import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NoUserImage from "../../assets/userImage.png";
import Loading from "../loading/Loading";
import "./Profile.scss";
import { Grid } from "@material-ui/core";
import PlaylistCard from "../playlistCard/PlaylistCard";
import { getUserTop } from "../../actions";
import SongRow from "../songRow/SongRow";
import ArtistCard from "../artistCard/ArtistCard";

function Profile() {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const userData = useSelector((state) => state.userReducer.userData);
  const topTracks = useSelector((state) => state.userReducer.userTopTracks);
  const topArtists = useSelector((state) => state.userReducer.userTopArtists);
  const playlists = useSelector((state) => state.userReducer.userPlaylists);
  const [showAll, setShowAll] = useState(false);
  const [showAllArtists, setShowAllArtists] = useState(false);
  const dispatch = useDispatch();
  const tracksLength = showAll ? topTracks.items.length : 5;
  const artistsLength = showAllArtists ? topArtists.items.length : 6;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUserTop(accessToken));
  }, [dispatch, accessToken]);

  const handleClick = (value) => {
    setShowAll(value);
    var showAll = document.getElementById("showAll");
    var showLess = document.getElementById("showLess");
    if (value) {
      showAll.style.display = "none";
      showLess.style.display = "block";
    } else {
      showAll.style.display = "block";
      showLess.style.display = "none";
    }
  };

  const handleClickArtists = (value) => {
    setShowAllArtists(value);
    var showAllArtists = document.getElementById("showAllArtists");
    var showLessArtists = document.getElementById("showLessArtists");
    if (value) {
      showAllArtists.style.display = "none";
      showLessArtists.style.display = "block";
    } else {
      showAllArtists.style.display = "block";
      showLessArtists.style.display = "none";
    }
  };

  return (
    <div>
      {userData ? (
        <div className="profile__page">
          <div className="profile">
            <div className="profile__info">
              {userData.images[0] ? (
                <img src={userData.images[0].url} alt="" />
              ) : (
                <img
                  className="noArtistPic"
                  src={NoUserImage}
                  alt="NoUserPicture"
                />
              )}
              <div className="profile__infoText">
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

          <div className="profile__songs">
            <div className="profile__songs__header">
              <h2>Top Tracks</h2>
              <p id="showAll" onClick={() => handleClick(true)}>
                show all
              </p>
              <p id="showLess" onClick={() => handleClick(false)}>
                show less
              </p>
            </div>
            {topTracks ? (
              <div className="profile__songList">
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

          <div className="profile__artists">
            <div className="profile__songs__header">
              <h2>Top Artists</h2>
              <p id="showAllArtists" onClick={() => handleClickArtists(true)}>
                show all
              </p>
              <p id="showLessArtists" onClick={() => handleClickArtists(false)}>
                show less
              </p>
            </div>
            {topArtists ? (
              <div className="profile__artistGrid">
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

          <div className="profile__artists">
            <h2>Public Playlists</h2>
            {playlists ? (
              <div className="profile__artistGrid">
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
