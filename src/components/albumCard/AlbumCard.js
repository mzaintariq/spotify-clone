import React from "react";
import "./AlbumCard.scss";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

function AlbumCard({ data }) {
  return (
    <div>
      <Link className="card__link" to={`/album/${data.id}`}>
        <div className="card">
          <div className="card__thumbnail">
            <img src={data.images[0].url} alt="PlaylistArt" />
          </div>
          <div className="card__text">
            <h4>{data.name}</h4>
            <p>{data.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AlbumCard;
