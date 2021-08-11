import React from "react";
import "./SongRow.scss";
import ExplicitIcon from "@material-ui/icons/Explicit";
import { useSelector, useDispatch } from "react-redux";
import { setCurrent } from "../../actions";

function SongRow({ track, id, type }) {
  const playlistData = useSelector((state) => state.playlistReducer.playlistData);
  const albumData = useSelector((state) => state.albumReducer.albumData);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (type === "single") {
      dispatch(setCurrent([track.uri, 0]));
    } else if (type === "album") {
      var albumTrackUris = albumData.tracks.items.map((item) => {
        return item.uri;
      });
      dispatch(setCurrent([albumTrackUris, index]));
    } else {
      var trackUris = playlistData.tracks.items.map((item) => {
        if (item.track) {
          return item.track.uri;
        }
        return null;
      });
      var filteredTrackUris = trackUris.filter((item) => {
        return item != null;
      });
      dispatch(setCurrent([filteredTrackUris, index]));
    }
  };

  const msToMinutesAndSeconds = (duration_ms) => {
    var minutes = Math.floor(duration_ms / 60000);
    var seconds = ((duration_ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div className="songrow" onClick={() => handleClick(id)}>
      <div className="songrow__number">
        <h4>{id + 1}</h4>
      </div>
      {type !== "album" ? (
        <div className="songrow__albumart">
          <img
            className="songrow__album"
            src={track.album.images[0].url}
            alt=""
          />
        </div>
      ) : (
        <></>
      )}
      <div className="songrow__small">
        <div className="songrow__info">
          <div className="songrow__info__name">
            <h1>{track.name}</h1>
          </div>
          <div className="songrow__info__artist">
            <p>
              {track.artists.map((artist) => artist.name).join(", ")}
              {type !== "album" ? <> - {track.album.name} </> : <></>}
            </p>
          </div>
        </div>

        <div className="songrow_right">
          {track.explicit ? (
            <ExplicitIcon className="songrow__info__icon" />
          ) : (
            <></>
          )}
          <div className="songrow_time">
            {msToMinutesAndSeconds(track.duration_ms)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongRow;
