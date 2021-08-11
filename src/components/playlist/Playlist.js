import React, { useEffect } from "react";
import "./Playlist.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlaylist } from "../../actions";
import SongRow from "../songRow/SongRow";
import Loading from "../loading/Loading";

function Playlist() {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const playlistData = useSelector((state) => state.playlistReducer.playlistData);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPlaylist([accessToken, id]));
  }, [dispatch, accessToken, id]);

  function handleClick(item) {
    // console.log('The link was clicked.');
    // console.log(item);
  }

  return (
    <div>
      {playlistData ? (
        <div className="playlist__page">
          <div className="playlist">
            <div className="playlist__info">
              <img src={playlistData.images[0].url} alt="" />
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
            <div className="playlist__icons"></div>
            <div className="playlist__header">
              <div className="header__number">
                <h4>#</h4>
              </div>
              <div className="header__title">
                <h4>TITLE</h4>
              </div>
            </div>
            <hr className="playlist__line" />
            <div className="playlist__songList">
              {playlistData.tracks.items.map((item, index) => (
                <div onClick={() => handleClick(item.track.uri)}>
                  {/* <div onClick={() => {console.log(item.track.uri)}}> */}
                  {item.track ? (
                    <SongRow key={item.id} track={item.track} id={index} />
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
