import React from "react";
import "./Thumbnail.scss";
import { Link } from "react-router-dom";

function Thumbnail({ data }) {
  return (
    <div>
      <Link to={`/playlist/${data.id}`}>
        <div className="thumbnail">
          <img src={data.images[0].url} alt="" />
          <div class="overlay">
            <div class="text">{data.name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
