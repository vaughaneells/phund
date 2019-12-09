/*The root index.jsx file bootstraps the phund application by rendering the App component 
(wrapped in a redux Provider) into the app div element defined in the base index html file above.*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App.jsx';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
