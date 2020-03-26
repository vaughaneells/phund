import { combineReducers } from 'redux';

import { authentication } from './auth_reducer';
import { alert } from './alert_reducer';
import { user } from './user_reducer';
import { borrower } from './borrower_reducer';

const rootReducer = combineReducers({
  authentication,
  user,
  borrower,
  alert
});

export default rootReducer;
