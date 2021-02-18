import { userConstants } from '../constants';

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.GETUSER_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETUSER_SUCCESS:
      return {
        firstName: action.user.firstName,
        id: action.user.id,
        email: action.user.email,
        role: action.user.role,
        verified: action.user.verified
      };
    case userConstants.GETUSER_FAILURE:
      return { error: action.error };
    case userConstants.GETUSER_CLEAR:
      return {};

    case userConstants.USER_UPDATE_REQUEST:
      return { LOADING: true };
    case userConstants.USER_UPDATE_SUCCESS:
      return { SUCCESS: true };
    case userConstants.USER_UPDATE_FAILURE:
      return { SUCCESS: false };
    default:
      return state;

    case userConstants.USER_PROFILE:
      return { PROFILE: true };
    case userConstants.USER_NOPROFILE:
      return { PROFILE: false };
  }
}
