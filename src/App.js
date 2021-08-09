import "./App.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getToken } from "./actions/index";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Library from "./components/library/Library";
import Login from "./components/login/Login";
import Search from "./components/search/Search";
import Playlist from "./components/playlist/Playlist";
import Album from "./components/album/Album";
import Artist from "./components/artist/Artist";

function App() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      dispatch(getToken(code));
      window.history.pushState("", "", "/");
    }
  }, [dispatch]);

  return (
    <div className="app">
      {myState.accessToken ? (
        <>
          <Router>
            <Header />
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
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
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
