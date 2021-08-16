import React, { Component } from "react";
import "./ErrorBoundary.scss";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error__message">
          <h2>Something went wrong</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
