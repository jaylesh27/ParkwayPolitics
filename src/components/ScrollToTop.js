import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// see the following resource: https://reacttraining.com/react-router/web/guides/scroll-restoration

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);