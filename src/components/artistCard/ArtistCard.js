import React from "react";
import "./ArtistCard.scss";
import { Link } from "react-router-dom";
import UserImage from "../../assets/userImage.png";

function ArtistCard({ data }) {
  return (
    <div>
      <Link className="artistcard__link" to={`/artist/${data.id}`}>
        <div className="artistcard">
          <div className="artistcard__thumbnail">
            {data.images[0] ? (
              <img src={data.images[0].url} alt="ArtistPicture" />
            ) : (
              <img
                className="noUserPic"
                src={UserImage}
                alt="NoArtistPicture"
              />
            )}
          </div>
          <div className="artistcard__text">
            <h4>{data.name}</h4>
            <p>
              <b>Artist</b> •{" "}
              {data.followers.total
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              followers
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArtistCard;
