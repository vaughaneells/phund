/*authentication reducer manages the state related to login (and logout) actions, 
on successful login the current user object and a loggedIn flag are stored in 
the authentication section of the application state. On logout or login failure 
the authentication state is set to an empty object, and during login 
(between login request and success/failure) the authentication state has a 
loggingIn flag set to true and a user object with the details of the user that 
is attempting to login.*/

import { userConstants } from '../_constants';
//CHANGE
//let user = document.cookie.includes('refresh_token');
//const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        token: action.jwt.jwt
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        error: action.error
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false
      };

    case userConstants.REFRESHTOKEN_REQUEST:
      return {
        loggingIn: true,
        token: { jwt_token: false }
      };
    case userConstants.REFRESHTOKEN_SUCCESS:
      return {
        loggedIn: true,
        token: action.jwt.jwt
      };
    case userConstants.REFRESHTOKEN_FAILURE:
      return {
        loggedIn: false,
        error: action.error
      };
    default:
      return state;
  }
}
