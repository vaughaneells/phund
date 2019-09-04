import React from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../helpers/authenticateUser.js';

const PrivateComponent = ({ component }) => {
  return auth() ? component : <Redirect to = '/login'/>
};

export default PrivateComponent;
