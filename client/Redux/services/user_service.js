/*The user service encapsulates all backend api calls. The service 
methods are exported via the userService object at the top of the file, and the 
implementation of each method is located in the function declarations below.*/

import config from 'config';
import handleResponse from '../helpers/handle_response';

export const userService = {
  login,
  logout,
  register,
  user,
  updateUser
};

//Calls login API
function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password })
  };

  return fetch(`${config.apiUrl}/api/landing`, requestOptions)
    .then(handleResponse)
    .then(response => {
      try {
        console.log('Response')
        console.log(response)
        return response;
      } catch (err) {
        alert(err.msg);
        return err;
      }
    });
}

//Calls register API
function register(firstName, email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstName,
      email: email,
      password: password,
    })
  };

  return fetch(`${config.apiUrl}/api/register`, requestOptions)
    .then(handleResponse)
    .then(response => {
      try {
        return response;
      } catch (err) {
        alert(err);
        return err;
      }
    });
}

//NEED TO FIGURE OUT WHEN TO CHECK IF COOKIE EXIST BEFORE MAKING CALL

//Gets user information
function user() {
  const requestOptions = {
    method: 'GET',
    headers: { 'X-Requested-With': 'XmlHttpRequest' }
  };

  return fetch(
    `${config.apiUrl}/api/user/me
  `,
    requestOptions
  )
    .then(handleResponse)
    .then(user => {
      try {
        return JSON.parse(user);
      } catch (err) {
        alert(err);
      }
    });
}

function logout() {
  const requestOptions = {
    method: 'POST',
    headers: { 'X-Requested-With': 'XmlHttpRequest' }
  };

  return fetch(
    `${config.apiUrl}/api/login/logout
  `,
    requestOptions
  ).then(response => {
    try {
      return response;
    } catch (err) {
      alert(err);
    }
  });
}

function verify() {
  const requestOptions = {
    method: 'POST',
    headers: { 'X-Requested-With': 'XmlHttpRequest' }
  };

  return fetch(
    `${config.truliooUrl}/api/login/logout
  `,
    requestOptions
  )
    .then(handleResponse)
    .then(response => {
      try {
        return response;
      } catch (err) {
        alert(err);
      }
    });
}

function updateUser(updateFields) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'X-Requested-With': 'XmlHttpRequest',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ updates: updateFields })
  };

  return fetch(
    `${config.apiUrl}/api/user/me/edit
  `,
    requestOptions
  )
    .then(handleResponse)
    .then(user => {
      try {
        return user;
      } catch (err) {
        alert(err);
      }
    });
}
