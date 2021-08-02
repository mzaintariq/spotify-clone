import React from 'react'
import './Option.scss'
import { Link } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';

function Option({ text, Icon, to, imgUrl }) {
  return (
    <Link className="option__link" to={to}>
      <div className="option__label">
        {Icon && <Icon className="option__icon" />}
        {imgUrl && 
          <div className="option__avatar">
            <Avatar src={imgUrl} alt="" style={{ height: '30px', width: '30px' }} />
          </div>
        }
        <h4>{text}</h4>
      </div>
    </Link>
  )
}

export default Option
