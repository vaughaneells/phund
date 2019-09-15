import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateComponent = (component) => {
  return document.cookie.includes('logged_in=true') ? React.createElement(component) : <Redirect to='/login'/>
};

export default PrivateComponent;
