import React from 'react'
import './Thumbnail.scss'
import { Link } from "react-router-dom";

function Thumbnail({ data }) {
  return (
    // <Link className="option__link" to={to}>
    //   <div className="option__label">
    //     {Icon && <Icon className="option__icon" />}
    //     <h4>{text}</h4>
    //   </div>
    // </Link>

    <div>
        <div className="thumbnail">
          <img src={data.images[0].url} alt="" />
          <div class="overlay">
            <div class="text">{data.name}</div>
            {/* <div class="text2">{data.description}</div> */}
          </div>
        </div>
        {/* <div className="playlist__name">
          <h3>{data.name}</h3>
        </div> */}

    </div>



    // <div>
    //     <div className="thumbnail">
    //       <img src={data.images[0].url} alt="" />
    //     </div>
    // </div>
  )
}

export default Thumbnail
