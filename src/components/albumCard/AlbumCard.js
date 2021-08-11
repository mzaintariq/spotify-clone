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
            {/* <p>
              {data.artists.map((artist, index) => (
                <button
                  key={artist.id}
                  className="albumcard__text__button"
                  onClick={(event) => event.stopPropagation()}
                >
                  <Link
                    className="albumcard__text__link"
                    to={`/artist/${artist.id}`}
                  >
                    <>{artist.name}</>
                  </Link>
                  {index < data.artists.length - 1 && <>, </>}
                </button>
              ))}
            </p> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AlbumCard;
