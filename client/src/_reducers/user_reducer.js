import { userConstants } from '../_constants';
//CHANGE

export function user(state = {}, action) {
  switch (action.type) {
    case userConstants.GETUSER_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETUSER_SUCCESS:
      return {
        firstName: action.user.firstName,
        id: action.user._id,
        email: action.user.email
      };
    case userConstants.GETUSER_FAILURE:
      return { error: action.error };
    case userConstants.GETUSER_CLEAR:
      return {};
    default:
      return state;
  }
}
