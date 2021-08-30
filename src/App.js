import React, { useEffect, Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Loading from "./components/Loading";
import ErrorBoundary from "./components/ErrorBoundary";
import { getRefresh } from "./actions/index";
import {
  accessTokenSelector,
  expiresInSelector,
  refreshTokenSelector,
} from "./reducers/authReducer";

const Home = lazy(() => import("./components/Home"));
const Profile = lazy(() => import("./components/Profile"));
const Library = lazy(() => import("./components/Library"));
const Search = lazy(() => import("./components/Search"));
const Playlist = lazy(() => import("./components/Playlist"));
const Album = lazy(() => import("./components/Album"));
const Artist = lazy(() => import("./components/Artist"));
const Category = lazy(() => import("./components/Category"));
const NotFound = lazy(() => import("./components/NotFound"));

function App() {
  const accessToken = useSelector(accessTokenSelector);
  const refreshToken = useSelector(refreshTokenSelector);
  const expiresIn = useSelector(expiresInSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (refreshToken) {
        dispatch(getRefresh(refreshToken));
      }
    }, (expiresIn - 60) * 1000);
    return () => clearInterval(interval);
  }, [dispatch, refreshToken, expiresIn, accessToken]);

  return (
    <div className="app">
      {accessToken ? (
        <>
          <Router>
            <Header />
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="load">
                    <Loading />
                  </div>
                }
              >
                <div className={styles.mainpage}>
                  <Switch>
                    <Route exact path="/library">
                      <Library />
                    </Route>
                    <Route exact path="/profile">
                      <Profile />
                    </Route>
                    <Route exact path="/search">
                      <Search />
                    </Route>
                    <Route path="/playlist/:id">
                      <Playlist />
                    </Route>
                    <Route path="/album/:id">
                      <Album />
                    </Route>
                    <Route path="/artist/:id">
                      <Artist />
                    </Route>
                    <Route path="/category/:id">
                      <Category />
                    </Route>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route>
                      <NotFound />
                    </Route>
                  </Switch>
                </div>
              </Suspense>
            </ErrorBoundary>
            <div className={styles.background}></div>
            <Footer />
          </Router>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
