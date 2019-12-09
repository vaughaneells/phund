/*Auth header is a helper function that returns an HTTP Authorization header containing 
the Json Web Token (JWT) of the currently logged in user from the Redux store.*/
import { store } from './store';
import Cookies from 'js-cookie';

export function authHeader() {
  // return authorization header with jwt token

  const state = store.getState();
  const { jwt_token } = state.authentication.token;
  if (jwt_token) {
    return { Authorization: 'Bearer ' + jwt_token };
  } else {
    return {};
  }
}
