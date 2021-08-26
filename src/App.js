import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Library from "./components/library/Library";
import Login from "./components/login/Login";
import Search from "./components/search/Search";
import Playlist from "./components/playlist/Playlist";
import Album from "./components/album/Album";
import NotFound from "./components/notFound/NotFound";
import { accessTokenSelector } from "./reducers/authReducer";

function App() {
  const accessToken = useSelector(accessTokenSelector);

  return (
    <div className="app">
      {accessToken ? (
        <>
          <Router>
            <Header />
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
                <Route exact path="/">
                  <Home />
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </div>
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