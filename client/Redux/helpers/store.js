import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  { authentication: { loggedIn: false } },
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);
