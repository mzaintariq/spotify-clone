import React, { useEffect } from "react";
import "./Playlist.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlaylist } from "../../actions";
import SongRow from "../songrow/SongRow";

function Playlist() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.playlistReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylist([myState.accessToken, id]));
  }, []);

  return (
    <div>
      {myState2.playlistData ? (
        <div className="playlist__page">
          <div className="playlist">
            <div className="playlist__info">
              <img src={myState2.playlistData.images[0].url} alt="" />
              <div className="playlist__infoText">
                {/* <strong>PLAYLIST</strong> */}
                <h4>PLAYLIST</h4>
                <h2>{myState2.playlistData.name}</h2>
                {/* <p>{myState2.playlistData.description}</p> */}
                <p>
                  {myState2.playlistData.description.replaceAll(
                    /<[^>]*>/gi,
                    ""
                  )}
                </p>
                {/* <p><b>{myState2.playlistData.owner.display_name}</b> • {myState2.playlistData.followers.total} likes</p> */}
                {/* <p><b>{myState2.playlistData.owner.display_name}</b> • {myState2.playlistData.followers.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} likes</p> */}
              </div>
            </div>
          </div>
          <div className="playlist__songs">
            <div className="playlist__icons"></div>

            <div className="playlist__top">
              <div className="songrow__number">
                <h1>#</h1>
              </div>
              <div className="c3">
                <p>TITLE</p>
              </div>
            </div>
            <hr className="playlist__line" />

            <div className="playlist__songList">
              {myState2.playlistData.tracks.items.map((item, index) => (
                // <h1>{item.track.name}</h1>
                <SongRow key={item.id} track={item.track} id={index} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div class="snippet" data-title=".dot-flashing">
            <div class="stage">
              <div class="dot-flashing"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Playlist;
