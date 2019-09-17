import React from 'react';
import { useState, useEffect } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPIN] = useState('');
  const [waitForConfirm, toggleWaitForConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: name, email: email, password: password})
    })
      .then(response => response.json())
      .then(response => {
        if (response.errors) alert(JSON.stringify(response.errors));
        else toggleWaitForConfirm(true);
      })
  };

  return !waitForConfirm ?
    <div id="register">
      <form onSubmit={handleSubmit}>
        <input required type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)}></input>
        <input required type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
        <input required type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
    : <div id="confirm_email">
      <h2>Please enter the 4 digit PIN sent to {email}.</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" maxLength="4" placeholder="XXXX" onChange={e => setPIN(e.target.value)} />
      </form>
    </div>
};

export default Register;
