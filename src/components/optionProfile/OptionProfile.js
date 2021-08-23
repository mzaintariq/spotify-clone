import React, { useState, useEffect, useRef } from "react";
import "./OptionProfile.scss";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { setToken } from "../../actions";
import { useDispatch } from "react-redux";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function OptionProfile({ text, Icon, imgUrl }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const container = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return function cleanup() {
      document.addEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleLogout = () => {
    setOpen(!open);
    dispatch(
      setToken({ access_token: null, expires_in: null, refresh_token: null })
    );
  };

  return (
    <div ref={container}>
      <div className="option__link" onClick={() => handleClick()}>
        <div className="option__label">
          {imgUrl && (
            <div className="option__avatar">
              <Avatar
                src={imgUrl}
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </div>
          )}
          <h4>{text}</h4>
        </div>
      </div>
      {open && (
        <div className="dropdown">
          <div className="arrow-up"></div>
          <Link
            className="profile__link"
            to="/profile"
            onClick={() => handleClick()}
          >
            <PersonIcon className="profile__link__icon" />
            My Profile
          </Link>
          <div className="logout__button" onClick={() => handleLogout()}>
            <ExitToAppIcon className="logout__button__icon" />
            Log Out
          </div>
        </div>
      )}
    </div>
  );
}

export default OptionProfile;
