import React, { Component } from "react";
import CircularLoader from "../common/CircularLoader";

const withLoader = (WrappedComponent) => {
  class withLoaderComponent extends Component {
    render() {
      const { isLoading } = this.props;
      return isLoading
        ? <CircularLoader/>
        : <WrappedComponent {...this.props} />;
    }
  }

  return withLoaderComponent;
};

export default withLoader;