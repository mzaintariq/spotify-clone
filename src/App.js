import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Library from "./components/library/Library";
import Login from "./components/login/Login";
import Search from "./components/search/Search";
import Playlist from "./components/playlist/Playlist";
import Album from "./components/album/Album";
import { accessTokenSelector } from "./reducers/authReducer";

function App() {
  const accessToken = useSelector(accessTokenSelector);

  return (
    <div className="app">
      {accessToken ? (
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
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
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