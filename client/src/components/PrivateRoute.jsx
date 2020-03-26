import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Cookies.get('user') && Cookies.get('id_1') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
/*
class PrivateRoute extends React.Component {
  render() {
    if (Cookies.get('user') && Cookies.get('id_1')) {
      return <Route {...this.props} />;
    } else {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: this.props.location }
          }}
        />
      );
    }
  }
}

export { PrivateRoute };
*/
