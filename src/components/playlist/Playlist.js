import React, { useEffect } from "react";
import "./Playlist.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlaylist } from "../../actions";
import SongRow from "../songRow/SongRow";
import Loading from "../loading/Loading";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PlaylistImage from "../../assets/playlistImage.png";

function Playlist() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.playlistReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  var num = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPlaylist([myState.accessToken, id]));
  }, []);

  return (
    <div>
      {myState2.playlistData ? (
        <div className="playlist__page">
          <div className="playlist">
            <div className="playlist__info">
              {myState2.playlistData.images[0] ? (
                <img src={myState2.playlistData.images[0].url} alt="" />
              ) : (
                <img
                  className="noUserPic"
                  src={PlaylistImage}
                  alt="NoPlaylistPicture"
                />
              )}
              <div className="playlist__infoText">
                <h4>PLAYLIST</h4>
                <h2>{myState2.playlistData.name}</h2>
                <p>
                  {myState2.playlistData.description.replaceAll(
                    /<[^>]*>/gi,
                    ""
                  )}
                </p>
                <p>
                  <b>{myState2.playlistData.owner.display_name}</b> •{" "}
                  {myState2.playlistData.followers.total
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  likes
                </p>
              </div>
            </div>
          </div>

          <div className="playlist__songs">
            <div className="playlist__header">
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
              {myState2.playlistData.tracks.items.map((item, index) => (
                <div>
                  {item.track ? (
                    <div>
                      <SongRow key={item.id} track={item.track} id={num} />
                      <div className="hidden">{num++}</div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Playlist;
