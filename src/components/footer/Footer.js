import React from 'react'
import './Footer.scss'
import { Link } from "react-router-dom";
import Player from '../player/Player'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';


function Footer() {
  return (
    <div className="footer">
      {/* <h2>Footer</h2> */}
      <div className="footer__left">
        <p>Album Song Details</p>
      </div>

      <div className="footer__center">
        <SkipPreviousIcon />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
        <SkipNextIcon />
      </div>

      <div className="footer__right">
        <p>Volume</p>
      </div>


      {/* Footer */}
      {/* <Player /> */}
    </div>
  );
}

export default Footer;
