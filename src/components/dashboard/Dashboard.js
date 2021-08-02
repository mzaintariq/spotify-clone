import "./Dashboard.scss";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../actions/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Search from "../search/Search";
import Library from "../library/Library";

import Playlist from "../playlist/Playlist";

function Dashboard() {
  const myState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(myState.accessToken));
  }, []);

  return (
    <>
      <Router>
        <Header />
        <div className="homepage">
          <Switch>
            {/* <Route path='/Profile/:id/editProfile' component={EditUser} /> */}
            <Route path="/playlist/:id">
              <Playlist />
            </Route>

            <Route path="/search">
              <Search />
            </Route>
            <Route path="/library">
              <Library />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default Dashboard;
