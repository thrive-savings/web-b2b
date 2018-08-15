/**
 *
 * PrivateRoute
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { loadState } from 'utils/localStorage';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);

    const persistedAuth = loadState('auth');
    this.state = {
      persistedAuth,
    };
  }

  render() {
    const { component: WrappedComponent, ...rest } = this.props;
    const { persistedAuth } = this.state;

    return (
      <Route
        {...rest}
        render={props =>
          persistedAuth && persistedAuth.jwt ? (
            <WrappedComponent {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

export default PrivateRoute;
