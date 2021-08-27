import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Grid } from "@material-ui/core";

import styles from "./Artist.module.scss";
import Loading from "./Loading";
import SongRow from "./SongRow";
import AlbumCard from "./AlbumCard";
import { getArtist } from "../actions";
import { accessTokenSelector } from "../reducers/authReducer";
import {
  artistAlbumSelector,
  artistDataSelector,
  artistSingleSelector,
  artistTopTracksSelector,
  isLoadingSelector,
} from "../reducers/artistReducer";

import NoUserImage from "../assets/userImage.png";

function Artist() {
  const accessToken = useSelector(accessTokenSelector);
  const artistData = useSelector(artistDataSelector);
  const artistTopTracks = useSelector(artistTopTracksSelector);
  const artistAlbums = useSelector(artistAlbumSelector);
  const artistSingles = useSelector(artistSingleSelector);
  const isLoading = useSelector(isLoadingSelector);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getArtist([accessToken, id]));
  }, [dispatch, accessToken, id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {artistData && (
            <div className={styles.artist__page}>
              <div className={styles.artist}>
                <div className={styles.artist__info}>
                  {artistData?.images[0] ? (
                    <img src={artistData.images[0].url} alt="" />
                  ) : (
                    <img
                      className={styles.noArtistPic}
                      src={NoUserImage}
                      alt="NoArtistPicture"
                    />
                  )}
                  <div className={styles.artist__infoText}>
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

              <div className={styles.artist__songs}>
                <h2>Popular</h2>
                {artistTopTracks && (
                  <div className={styles.artist__songList}>
                    {artistTopTracks.tracks.map((item, index) => (
                      <SongRow
                        key={item.id}
                        track={item}
                        id={index}
                        type="single"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.artist__albums}>
                <h2>Albums</h2>
                {artistAlbums && (
                  <div className={styles.artist__albumGrid}>
                    <Grid container justifyContent="flex-start" spacing={3}>
                      {artistAlbums.map((item) => (
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
                )}
              </div>

              <div className={styles.artist__singles}>
                <h2>Singles</h2>
                {artistAlbums && (
                  <div className={styles.artist__albumGrid}>
                    <Grid container justifyContent="flex-start" spacing={3}>
                      {artistSingles.map((item, index) => (
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
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Artist;
