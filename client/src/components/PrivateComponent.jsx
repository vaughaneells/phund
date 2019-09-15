import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import auth from '../helpers/authenticateUser.js';

const PrivateComponent = (component) => {
  return document.cookie.toString().includes('logged_in=true') ? React.createElement(component) : <Redirect to='/login'/>
};

export default PrivateComponent;
