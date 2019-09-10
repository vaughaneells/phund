import React from 'react';
import { useState, useEffect } from 'react';

const Register = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id="register">
      <form onSubmit={onSubmit}>
        <input type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)}></input>
        <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
        <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
      </form>
    </div>
  );
};

export default Register;
