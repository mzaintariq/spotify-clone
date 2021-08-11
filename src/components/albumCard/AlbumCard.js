import React from "react";
import "./AlbumCard.scss";
import { Link } from "react-router-dom";
import PlaylistImage from "../../assets/playlistImage.png";
import PropTypes from "prop-types";

AlbumCard.propTypes = {
  data: PropTypes.object,
};

function AlbumCard({ data }) {
  return (
    <div>
      <Link className="albumcard__link" to={`/album/${data.id}`}>
        <div className="albumcard">
          <div className="albumcard__thumbnail">
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
          <div className="albumcard__text">
            <h4>{data.name}</h4>
            <p>{data.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AlbumCard;
