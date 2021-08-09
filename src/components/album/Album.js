import React, { useEffect } from "react";
import "./Album.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAlbum } from "../../actions";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NoAlbumImage from "../../assets/playlistImage.png";
import Loading from "../loading/Loading";
import SongRow from "../songRow/SongRow";

function Album() {
  const myState = useSelector((state) => state.authReducer);
  const myState2 = useSelector((state) => state.albumReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAlbum([myState.accessToken, id]));
  }, []);

  return (
    <div>
      {myState2.albumData ? (
        <div className="album__page">
          <div className="album">
            <div className="album__info">
              {myState2.albumData.images[0] ? (
                <img src={myState2.albumData.images[0].url} alt="" />
              ) : (
                <img
                  className="noAlbumPic"
                  src={NoAlbumImage}
                  alt="NoAlbumPicture"
                />
              )}
              <div className="playlist__infoText">
                <h4>{myState2.albumData.album_type.toUpperCase()}</h4>
                <h2>{myState2.albumData.name}</h2>
                <p>
                  <b>
                    {myState2.albumData.artists
                      .map((artist) => artist.name)
                      .join(", ")}
                  </b> •{" "}
                  {myState2.albumData.release_date.replace(/-.*/g, "")}{" "} •{" "}
                  {myState2.albumData.total_tracks}
                  {myState2.albumData.total_tracks === 1 ? " song" : " songs"}
                </p>
              </div>
            </div>
          </div>

          <div className="album__songs">
            <div className="album__header">
              <div className="album__header__left">
                <div className="header__number">
                  <h4>#</h4>
                </div>
                <div className="header__title">
                  <h4>TITLE</h4>
                </div>
              </div>
              <div className="header__icons">
                <AccessTimeIcon className="time__icon" />
              </div>
            </div>
            <hr className="album__line" />
            <div className="album__songList">
              {myState2.albumData.tracks.items.map((item, index) => (
                <SongRow key={item.id} track={item} id={index} type="album" />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Album;
