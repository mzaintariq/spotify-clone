import React, { useEffect } from "react";
import { getCategoryData } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./Category.scss";
import Loading from "../loading/Loading";
import { Grid } from "@material-ui/core";
import PlaylistCard from "../playlistCard/PlaylistCard";

function Category() {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const categoryData = useSelector(
    (state) => state.categoryReducer.categoryData
  );
  const categoryPlaylists = useSelector(
    (state) => state.categoryReducer.categoryPlaylists
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCategoryData([accessToken, id]));
  }, [dispatch, accessToken, id]);

  return (
    <div>
      {categoryData ? (
        <div className="category__page">
          <div className="category">
            <div className="category__info">
              <img src={categoryData.icons[0].url} alt="" />
              <div className="category__infoText">
                <h4>Genre</h4>
                <h2>{categoryData.name}</h2>
              </div>
            </div>
          </div>

          <div className="category__playlist">
            <h2>Popular playlists</h2>
            {categoryPlaylists ? (
              <div className="category__playlistGrid">
                <Grid container justifyContent="flex-start" spacing={3}>
                  {categoryPlaylists.items.map((item) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <PlaylistCard data={item} />
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

export default Category;
