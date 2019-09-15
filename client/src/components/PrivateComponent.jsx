import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from '../helpers/authenticateUser.js';

const PrivateComponent = (component) => {
  return React.createElement(component);
};

export default PrivateComponent;
