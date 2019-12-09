//Contains Redux action creators for actions related to user

import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const userActions = {
  login,
  logout,
  register,
  user,
  refresh
};

function login(email, password) {
  return dispatch => {
    dispatch(request());

    userService.login(email, password).then(
      jwt => {
        dispatch(success({ jwt }));
        history.push('/dashboard');
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function success(jwt) {
    return { type: userConstants.LOGIN_SUCCESS, jwt };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}
function register(firstName, lastName, email, password) {
  return dispatch => {
    dispatch(request());

    userService.register(firstName, lastName, email, password).then(
      jwt => {
        dispatch(success());
        dispatch(loginRequest());
        try {
          dispatch(loginSuccess({ jwt }));
          dispatch(alertActions.success('Registration and Login successful'));
          history.push('/dashboard');
        } catch (error) {
          dispatch(loginFailure(error.toString()));
        }
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
  function loginRequest() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function loginSuccess(jwt) {
    return { type: userConstants.LOGIN_SUCCESS, jwt };
  }
  function loginFailure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

//Get User Info Action
function user() {
  return dispatch => {
    dispatch(request());

    userService.user().then(
      user => {
        dispatch(success(user));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.GETUSER_REQUEST };
  }
  function success(user) {
    return { type: userConstants.GETUSER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.GETUSER_FAILURE, error };
  }
}

function refreshRequest() {
  return { type: userConstants.GETUSER_REQUEST };
}

function refresh() {
  return dispatch => {
    dispatch(request());

    userService.refresh().then(
      jwt => {
        dispatch(success({ jwt }));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.REFRESHTOKEN_REQUEST };
  }
  function success(jwt) {
    return { type: userConstants.REFRESHTOKEN_SUCCESS, jwt };
  }
  function failure(error) {
    return { type: userConstants.REFRESHTOKEN_FAILURE, error };
  }
}

function logout() {
  return dispatch => {
    userService.logout();
    dispatch(logout());
    dispatch(clear());
  };

  function logout() {
    return { type: userConstants.LOGOUT };
  }

  function clear() {
    return { type: userConstants.GETUSER_CLEAR };
  }
}
