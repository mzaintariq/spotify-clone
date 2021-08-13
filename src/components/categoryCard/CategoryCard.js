import React from "react";
import "./CategoryCard.scss";
import { Link } from "react-router-dom";

function CategoryCard({ data }) {
  return (
    <div>
      <Link className="categorycard__link" to={`/category/${data.id}`}>
        <div className="categorycard">
          <div className="categorycard__thumbnail">
            <img src={data.icons[0].url} alt="PlaylistArt" />
          </div>
          <div className="categorycard__text">
            <h4>{data.name}</h4>
            <p>Genre</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
