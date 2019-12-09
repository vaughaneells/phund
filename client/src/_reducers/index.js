import { combineReducers } from 'redux';

import { authentication } from './auth_reducer';
import { registration } from './registration.reducer';
import { alert } from './alert_reducer';
import { user } from './user_reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  user
});

export default rootReducer;
