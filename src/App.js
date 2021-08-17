import "./App.scss";
import React, { useEffect, Suspense, lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getRefresh, getToken } from "./actions/index";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import Loading from "./components/loading/Loading";

const Home = lazy(() => import("./components/home/Home"));
const Profile = lazy(() => import("./components/profile/Profile"));
const Library = lazy(() => import("./components/library/Library"));
const Search = lazy(() => import("./components/search/Search"));
const Playlist = lazy(() => import("./components/playlist/Playlist"));
const Album = lazy(() => import("./components/album/Album"));
const Artist = lazy(() => import("./components/artist/Artist"));
const Category = lazy(() => import("./components/category/Category"));

function App() {
  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const refreshToken = useSelector((state) => state.authReducer.refreshToken);
  const expiresIn = useSelector((state) => state.authReducer.expiresIn);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      dispatch(getToken(code));
      window.history.pushState("", "", "/");
    }
  }, [dispatch]);

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
                <div className="mainpage">
                  <Switch>
                    <Route path="/library">
                      <Library />
                    </Route>
                    <Route path="/profile">
                      <Profile />
                    </Route>
                    <Route path="/search">
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
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </Suspense>
            </ErrorBoundary>
            <div className="background"></div>
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
