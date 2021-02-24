//Contains Redux action creators for actions related to user

import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from '.';
import { Link, Redirect } from 'react-router-dom';

export const userActions = {
  login,
  logout,
  register,
  user,
  updateUser,
  pageRefresh,
  // profileCreated
};

// function profileCreated(data) {
//   return dispatch => {
//     dispatch(request())
//   }
// }

function login(email, password) {
  return dispatch => {
    dispatch(request());
    userService.login(email, password).then(
      res => {
        dispatch(success());
        //dispatch(alertActions.success(JSON.parse(response).message));
      },
      err => {
        dispatch(failure(err.toString()));
        dispatch(alertActions.error(err.toString()));
      }
    );
  };

  function request() {
    return { type: userConstants.LOGIN_REQUEST };
  }
  function success() {
    return { type: userConstants.LOGIN_SUCCESS,
    payload: {loggedIn: true}};
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}
function register(firstName, email, password) {
  return dispatch => {
    dispatch(request());

    userService.register(firstName, email, password).then(
      res => {
        dispatch(success());
      },
      err => {
        dispatch(failure(err));
        alert(err);
      }
    );
  };
  function request() {
    return { type: userConstants.REGISTER_REQUEST };
  }
  function success() {
    return { type: userConstants.REGISTER_SUCCESS };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function updateUser(updates) {
  return dispatch => {
    dispatch(request());

    userService.updateUser(updates).then(
      response => {
        dispatch(success());
      },
      err => {
        dispatch(failure(err));
        alert(err);
      }
    );
  };

  function request() {
    return { type: userConstants.USER_UPDATE_REQUEST };
  }
  function success() {
    return { type: userConstants.USER_UPDATE_SUCCESS };
  }
  function failure(error) {
    return { type: userConstants.USER_UPDATE_FAILURE, error };
  }
}

//Get User Info Action
function user(user) {
  return dispatch => {
    try {
      
      dispatch(success(user));
    } catch (err) {
      dispatch(failure(err.toString()));
    }
    function success(user) {

      return { type: userConstants.GETUSER_SUCCESS, user };
    }
    function failure(error) {
      return { type: userConstants.GETUSER_FAILURE, error };
    }
  };
}
function pageRefresh() {
  return dispatch => {
    dispatch(pageRefresh());
  };

  function pageRefresh() {
    return { type: userConstants.PAGE_REFRESHED };
  }
}

function logout() {
  return dispatch => {
    userService.logout().then(res => {
      dispatch(clear());
      dispatch(logout());
    }),
      err => {
        dispatch(failure(err.toString()));
        dispatch(alertActions.error(err.toString()));
      };
  };

  function logout() {
    return { type: userConstants.LOGOUT };
  }

  function clear() {
    return { type: userConstants.GETUSER_CLEAR };
  }
}
