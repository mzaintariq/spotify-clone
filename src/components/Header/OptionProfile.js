import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import styles from "./OptionProfile.module.scss";
import { logout } from "../../actions/authActions";

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
    dispatch(logout);
  };

  return (
    <div ref={container}>
      <div className={styles.option__link} onClick={() => handleClick()}>
        <div className={styles.option__label}>
          {imgUrl && (
            <div className={styles.option__avatar}>
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
        <div className={styles.dropdown}>
          <div className={styles.arrow__up}></div>
          <Link
            className={styles.profile__link}
            to="/profile"
            onClick={() => handleClick()}
          >
            <PersonIcon className={styles.profile__link__icon} />
            My Profile
          </Link>
          <div className={styles.logout__button} onClick={() => handleLogout()}>
            <ExitToAppIcon className={styles.logout__button__icon} />
            Log Out
          </div>
        </div>
      )}
    </div>
  );
}

export default OptionProfile;
