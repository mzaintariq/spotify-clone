import React from "react";
import "./SongRow.scss";
import ExplicitIcon from "@material-ui/icons/Explicit";

function SongRow({ track, id }) {
  return (
    <div className="songrow">
      <div className="songrow__number">
        <h4>{id + 1}</h4>
      </div>
      <div className="songrow__albumart">
        <img
          className="songrow__album"
          src={track.album.images[0].url}
          alt=""
        />
      </div>
      <div className="songrow__small">
        <div className="songrow__info">
          <div className="songrow__info__name">
            <h1>{track.name}</h1>
          </div>
          <div className="songrow__info__artist">
            <p>
              {track.artists.map((artist) => artist.name).join(", ")} - {}
              {track.album.name}
            </p>
          </div>
        </div>
        {track.explicit ? (
          <ExplicitIcon className="songrow__info__icon" />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default SongRow;
