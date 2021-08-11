import React, { useEffect } from "react";
import "./Playlist.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getMorePlaylistTracks, getPlaylist } from "../../actions";
import SongRow from "../songRow/SongRow";
import Loading from "../loading/Loading";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PlaylistImage from "../../assets/playlistImage.png";

function Playlist() {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const playlistData = useSelector((state) => state.playlistReducer.playlistData);
  const { id } = useParams();
  const dispatch = useDispatch();
  var num = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPlaylist([accessToken, id]));
  }, [dispatch, accessToken, id]);

  useEffect(() => {
    if (playlistData && playlistData.tracks.next) {
      dispatch(getMorePlaylistTracks([accessToken, playlistData.tracks.next]));
    }
  }, [dispatch, accessToken, playlistData]);

  return (
    <div>
      {playlistData ? (
        <div className="playlist__page">
          <div className="playlist">
            <div className="playlist__info">
              {playlistData.images[0] ? (
                <img src={playlistData.images[0].url} alt="" />
              ) : (
                <img
                  className="noUserPic"
                  src={PlaylistImage}
                  alt="NoPlaylistPicture"
                />
              )}
              <div className="playlist__infoText">
                <h4>PLAYLIST</h4>
                <h2>{playlistData.name}</h2>
                <p>
                  {playlistData.description.replaceAll(
                    /<[^>]*>/gi,
                    ""
                  )}
                </p>
                <p>
                  <b>{playlistData.owner.display_name}</b> •{" "}
                  {playlistData.followers.total
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
              {playlistData.tracks.items.map((item, index) => (
                <div key={index}>
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
