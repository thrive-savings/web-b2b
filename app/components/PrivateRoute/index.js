/**
 *
 * PrivateRoute
 *
 */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/* eslint-disable react/prop-types */
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  console.log('-----PrivateRoute Rendering-----');
  console.log(auth);
  return (
    <Route
      {...rest}
      render={props =>
        auth.data.jwt ? (
          <Component {...props} />
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
};

export default PrivateRoute;
