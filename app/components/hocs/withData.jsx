import React, { Component } from "react";
import propTypes from "prop-types";
import Services from "../../services/index";

const withData = ({methodName: serviceMethod, paramName: serviceMethodParam}) => (WrappedComponent) => {
  class withDataComponent extends Component {
    state = {
      data: [],
      isLoading: true
    }

    componentDidMount() {
      (serviceMethodParam && this.props[serviceMethodParam] ? Services[serviceMethod](this.props[serviceMethodParam]) : Services[serviceMethod]())
        .then((res) => this.setState({ data: res.data, isLoading: false }));
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }

  return withDataComponent;
};

withData.PropTypes = {
  serviceMethod: propTypes.string.isRequired,
  serviceMethodParam: propTypes.string
};

export default withData;
