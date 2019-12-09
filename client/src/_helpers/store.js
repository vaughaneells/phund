import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../_reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  { authentication: { token: { jwt_token: false } } },
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);
