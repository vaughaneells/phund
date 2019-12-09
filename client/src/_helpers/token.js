import { store } from './store';
import { userConstants } from '../_constants';
import { userService } from '../_services';
import { userActions } from '../_actions';

export function jwt_token() {
  let state = store.getState();
  let { jwt_token } = state.authentication.token;
  if (jwt_token) {
    return jwt_token;
  } else {
    store.dispatch(userActions.refresh());
    let state = store.getState();
    let { jwt_token } = state.authentication.token;
    if (jwt_token) {
      return jwt_token;
    } else {
      return false;
    }
  }
}

export function jwt_token_expiry() {
  const state = store.getState();
  if (state.authentication.token) {
    const { jwt_token_expiry } = state.authentication.token;
    return jwt_token_expiry;
  }
}
