import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./ErrorBoundary.module.scss";
import { logout } from "../actions/authActions";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.error__message}>
          <h2>Something went wrong</h2>
          <div
            className={styles.refresh__button}
            onClick={() => this.handleLogout()}
          >
            Refresh
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {dispatch(logout)},
  };
};

export default connect(null, mapDispatchToProps)(ErrorBoundary);
