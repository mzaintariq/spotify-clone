import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Profile.module.scss";
import ProfileTracks from "./ProfileTracks";
import ProfileArtists from "./ProfileArtists";
import ProfilePlaylists from "./ProfilePlaylists";
import Loading from "../Loading";
import { getUserTop } from "../../actions";
import { accessTokenSelector } from "../../reducers/authReducer";
import {
  isLoadingAllSelector,
  userDataSelector,
} from "../../reducers/userReducer";

import NoUserImage from "../../assets/userImage.png";

function Profile() {
  const accessToken = useSelector(accessTokenSelector);
  const userData = useSelector(userDataSelector);
  const isLoading = useSelector(isLoadingAllSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUserTop(accessToken));
  }, [dispatch, accessToken]);

  return (
    <div>
      {userData ? (
        <div className={styles.profile__page}>
          <div className={styles.profile}>
            <div className={styles.profile__info}>
              {userData.images[0] ? (
                <img src={userData.images[0].url} alt="" />
              ) : (
                <img
                  className={styles.noUserPic}
                  src={NoUserImage}
                  alt="NoUserPicture"
                />
              )}
              <div className={styles.profile__infoText}>
                <h4>PROFILE</h4>
                <h2>{userData.display_name}</h2>
                <p>
                  {userData.followers.total
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  followers
                </p>
              </div>
            </div>
          </div>

          {isLoading ? (
            <Loading />
          ) : (
            <>
              <ProfileTracks />
              <ProfileArtists />
              <ProfilePlaylists />
            </>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Profile;
