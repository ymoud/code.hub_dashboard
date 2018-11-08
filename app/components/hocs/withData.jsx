import React, { Component } from "react";
import propTypes from "prop-types";
import Services from "../../services/index";
import NoDataFound from "../common/NoDataFound";

const withData = ({
  methodName: serviceMethod,
  paramName: serviceMethodParam
}) => WrappedComponent => {
  class withDataComponent extends Component {
    state = {
      data: [],
      isLoading: true,
      notFound: false
    };

    componentDidMount() {
      (serviceMethodParam && this.props[serviceMethodParam]
        ? Services[serviceMethod](this.props[serviceMethodParam])
        : Services[serviceMethod]()
      )
        .then(res => this.setState({ data: res.data, isLoading: false }))
        .catch(() =>
          this.setState({ data: undefined, isLoading: false, notFound: true })
        );
    }

    render() {
      const { notFound } = this.state;

      return notFound ? (
        <NoDataFound />
      ) : (
        <WrappedComponent {...this.state} {...this.props} />
      );
    }
  }

  return withDataComponent;
};

withData.PropTypes = {
  serviceMethod: propTypes.string.isRequired,
  serviceMethodParam: propTypes.string
};

export default withData;
