import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { userActions } from '../_actions';
import { jwt_token, history } from '../_helpers';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      jwt_token() ? (
        <Component {...props} />
      ) : (
        (userActions.refresh(),
        jwt_token() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        ))
      )
    }
  />
);
