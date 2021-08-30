import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Grid } from "@material-ui/core";

import styles from "./Category.module.scss";
import Loading from "./Loading";
import PlaylistCard from "./PlaylistCard";
import { getCategoryData } from "../actions";
import { accessTokenSelector } from "../reducers/authReducer";
import {
  categoryDataSelector,
  categoryPlaylistsSelector,
  isLoadingSelector,
} from "../reducers/categoryReducer";

function Category() {
  const accessToken = useSelector(accessTokenSelector);
  const categoryData = useSelector(categoryDataSelector);
  const categoryPlaylists = useSelector(categoryPlaylistsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCategoryData([accessToken, id]));
  }, [dispatch, accessToken, id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.category__page}>
          <div className={styles.category}>
            <div className={styles.category__info}>
              <img src={categoryData.icons[0].url} alt="" />
              <div className={styles.category__infoText}>
                <h4>Genre</h4>
                <h2>{categoryData.name}</h2>
              </div>
            </div>
          </div>

          <div className={styles.category__playlist}>
            <h2>Popular playlists</h2>
            {categoryPlaylists && (
              <div className={styles.category__playlistGrid}>
                <Grid container justifyContent="flex-start" spacing={3}>
                  {categoryPlaylists.items.map((item) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <PlaylistCard data={item} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Category;
