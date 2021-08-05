import React from "react";
import "./PlaylistCard.scss";
import { Link } from "react-router-dom";
import PlaylistImage from "../../assets/playlistImage.png";

function PlaylistCard({ data }) {
  return (
    <div>
      <Link className="playlistcard__link" to={`/playlist/${data.id}`}>
        <div className="playlistcard">
          <div className="playlistcard__thumbnail">
            {data.images[0] ? (
              <img src={data.images[0].url} alt="PlaylistArt" />
            ) : (
              <img
                className="noPlaylistPic"
                src={PlaylistImage}
                alt="NoPlaylistPicture"
              />
            )}
          </div>
          <div className="playlistcard__text">
            <h4>{data.name}</h4>
            {data.description ? (
              <p>{data.description.replaceAll(/<[^>]*>/gi, "")}</p>
            ) : (
              <p>
                Made by: <b>{data.owner.display_name}</b>
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PlaylistCard;
