/*The user service encapsulates all backend api calls for performing CRUD operations 
on user data, as well as logging and out of the example application. The service 
methods are exported via the userService object at the top of the file, and the 
implementation of each method is located in the function declarations below.*/

import config from 'config';
import { authHeader } from '../_helpers';
import Cookies from 'js-cookie';

export const userService = {
  login,
  logout,
  register,
  user,
  refresh
};

//Calls login API
function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password })
  };

  return fetch(`${config.apiUrl}/api/login`, requestOptions)
    .then(handleResponse)
    .then(token => {
      try {
        return token;
      } catch (err) {
        alert(err);
      }
    });
}

//Calls register API
function register(firstName, lastName, email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
  };

  return fetch(`${config.apiUrl}/api/register`, requestOptions)
    .then(handleResponse)
    .then(token => {
      try {
        return token;
      } catch (err) {
        alert(err);
      }
    });
}

function user() {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  };

  return fetch(
    `${config.apiUrl}/api/user
  `,
    requestOptions
  )
    .then(handleResponse)
    .then(user => {
      try {
        return user.user;
      } catch (err) {
        alert(err);
      }
    });
}

//Refreshes jwt
function refresh() {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch(
    `${config.apiUrl}/api/refresh
  `,
    requestOptions
  )
    .then(handleResponse)
    .then(token => {
      try {
        return token;
      } catch (err) {
        alert(err);
      }
    });
}

function logout() {
  //Cookies.remove('refresh_token');
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
