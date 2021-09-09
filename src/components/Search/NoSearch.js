import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Grid } from "@material-ui/core";

import styles from "./NoSearch.module.scss";
import Loading from "../Loading";
import CategoryCard from "../CategoryCard";
import { getCategoryList } from "../../actions";
import { accessTokenSelector } from "../../reducers/authReducer";
import { categoryListSelector, isLoadingListSelector } from "../../reducers/categoryReducer";

function NoSearch() {
  const accessToken = useSelector(accessTokenSelector);
  const categoryList = useSelector(categoryListSelector);
  const isLoadingList = useSelector(isLoadingListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList(accessToken));
  }, [dispatch, accessToken]);

  return (
    <div className={styles.nosearch}>
      {isLoadingList ? (
        <Loading />
      ) : (
        <>
          {categoryList && (
            <div className={styles.homepage}>
              <h2>Browse Categories</h2>
              <div className={styles.grid}>
                <Grid container justifyContent="flex-start" spacing={3}>
                  {categoryList.items.map((item, index) => (
                    <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} xl={2}>
                      <CategoryCard data={item} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default NoSearch;
