import React from 'react';
import { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: name, email: email, password: password})
    })
      .then(response => response.json())
      .then(response => console.log(response)); /* TODO: Save JWT to an HttpOnly cookie. Set Expiration=??*/
  };
  /* TODO: Implement client-side form validation. No need to have it server-side. */
  return (
    <div id="register">
      <form onSubmit={handleSubmit}>
        <input required type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)}></input>
        <input required type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
        <input required type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default Register;
