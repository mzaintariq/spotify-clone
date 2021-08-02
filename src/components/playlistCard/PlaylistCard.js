import React from "react";
import "./PlaylistCard.scss";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PlayCircleFilledTwoToneIcon from '@material-ui/icons/PlayCircleFilledTwoTone';

function PlaylistCard({ data }) {
  return (
    <div>
      <Link className="card__link" to={`/playlist/${data.id}`}>
        <div className="card">
          <div className="card__thumbnail">
            <img src={data.images[0].url} alt="PlaylistArt" />
          </div>
          <div className="card__text">
            <h4>{data.name}</h4>
            <p>{data.description.replaceAll(/<[^>]*>/gi, "")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PlaylistCard;
