import React from 'react';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Login = ({ originPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, shouldRedirect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email: email, password: password})
    })
      .then(response => response.json())
      .then(response => {
        if (response.errors) alert(JSON.stringify(response.errors));
        else shouldRedirect(true);
      })
  };

  return !redirect ?
    <div id="login">
      <form onSubmit={handleSubmit}>
        <input required type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
        <input required type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
        <input type="submit" value="Submit" />
      </form>
    </div> : <Redirect to='/dashboard'/>;
};

export default Login;
