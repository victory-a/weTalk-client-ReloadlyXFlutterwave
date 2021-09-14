import React, { Component } from "react";
import { refresh, container, message } from "./styles.module.scss";

export const ErrorBoundaryFallback = () => (
  <div className={container}>
    <div className={message}>
      Hey, something went wrong!
      <span onClick={() => window.location.reload()} className={refresh}>
        Please refresh!
      </span>
      <span role="img" aria-label="face-emoji">
        {" "}
        😞
      </span>
    </div>
  </div>
);

class ErrorBoundary extends Component {
  state = {
    error: null,
    info: null
  };

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { error } = this.state;

    if (error) {
      return <ErrorBoundaryFallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
