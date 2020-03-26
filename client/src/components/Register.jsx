/*The register page component renders a simple registration form 
with fields for first name, last name, email and password. 
It displays validation messages for invalid fields when the user 
attempts to submit the form. If the form is valid, submitting it calls 
this.props.register(user) which dispatches the redux action 
userActions.register(user).*/

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstName, email, password } = this.state;
    if (firstName && email && password) {
      this.props.register(firstName, email, password);
    }
  }

  render() {
    const { firstName, email, password } = this.state;
    const { loggedIn } = this.props;
    return !loggedIn ? (
      <div id='register'>
        <h2>Register</h2>
        <p>Please enter your first name, email, and password.</p>
        <b />
        <form onSubmit={this.handleSubmit}>
          <br />
          <input
            required
            type='text'
            placeholder='First Name'
            name='firstName'
            value={firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={this.handleChange}
          />
          <br />
          <input
            required
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={this.handleChange}
          />
          <br />
          <button>Register</button>
          <Link to='/'>Cancel</Link>
        </form>
      </div>
    ) : (
      <Redirect to='/home' />
    );
  }
}

function mapState(state) {
  const { registering, loggedIn } = state.authentication;
  return { registering, loggedIn };
}

const actionCreators = {
  register: userActions.register
};

const connectedRegister = connect(mapState, actionCreators)(Register);
export { connectedRegister as Register };
