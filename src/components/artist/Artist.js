import React, { useEffect } from "react";
import { getArtist } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./Artist.scss";
import Loading from "../loading/Loading";
import NoUserImage from "../../assets/userImage.png";
import SongRow from "../songRow/SongRow";
import AlbumCard from "../albumCard/AlbumCard";
import { Grid } from "@material-ui/core";

function Artist() {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const artistData = useSelector((state) => state.artistReducer.artistData);
  const artistTopTracks = useSelector(
    (state) => state.artistReducer.artistTopTracks
  );
  const artistAlbums = useSelector((state) => state.artistReducer.artistAlbums);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getArtist([accessToken, id]));
  }, [dispatch, accessToken, id]);

  return (
    <div>
      {artistData ? (
        <div className="artist__page">
          <div className="artist">
            <div className="artist__info">
              {artistData.images[0] ? (
                <img src={artistData.images[0].url} alt="" />
              ) : (
                <img
                  className="noArtistPic"
                  src={NoUserImage}
                  alt="NoArtistPicture"
                />
              )}
              <div className="artist__infoText">
                <h4>ARTIST</h4>
                <h2>{artistData.name}</h2>
                <p>
                  {artistData.followers.total
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  followers
                </p>
              </div>
            </div>
          </div>

          <div className="artist__songs">
            <h2>Popular</h2>
            {artistTopTracks ? (
              <div className="artist__songList">
                {artistTopTracks.tracks.map((item, index) => (
                  <SongRow
                    key={item.id}
                    track={item}
                    id={index}
                    type="single"
                  />
                ))}
              </div>
            ) : (
              <Loading />
            )}
          </div>

          <div className="artist__albums">
            <h2>Albums</h2>
            {artistAlbums ? (
              <div className="artist__albumGrid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {artistAlbums.items
                    .filter((item) => item.album_type === "album")
                    .map((item) => (
                      <Grid
                        key={item.id}
                        item
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        xl={2}
                      >
                        <AlbumCard data={item} />
                      </Grid>
                    ))}
                </Grid>
              </div>
            ) : (
              <Loading />
            )}
          </div>

          <div className="artist__singles">
            <h2>Singles</h2>
            {artistAlbums ? (
              <div className="artist__albumGrid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {artistAlbums.items
                    .filter(
                      (item) => item.album_type === "single"
                      // && item.artists[0].name === myState2.artistData.name
                    )
                    .map((item, index) => (
                      <Grid
                        key={item.id}
                        item
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        xl={2}
                      >
                        <AlbumCard data={item} />
                      </Grid>
                    ))}
                </Grid>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Artist;
