import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./App.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Library from "./components/Library";
import Login from "./components/Login";
import Search from "./components/Search";
import Playlist from "./components/Playlist";
import Album from "./components/Album";
import NotFound from "./components/NotFound";
import Artist from "./components/Artist";
import Category from "./components/Category";
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