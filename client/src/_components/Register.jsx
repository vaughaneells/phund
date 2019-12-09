/*The register page component renders a simple registration form 
with fields for first name, last name, email and password. 
It displays validation messages for invalid fields when the user 
attempts to submit the form. If the form is valid, submitting it calls 
this.props.register(user) which dispatches the redux action 
userActions.register(user).*/

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { firstName, lastName, email, password } = this.state;

    if (firstName && lastName && email && password) {
      this.props.register(firstName, lastName, email, password);
    }
  }

  render() {
    const { registering } = this.props;
    const { firstName, lastName, email, password, submitted } = this.state;
    return (
      <div className='col-md-6 col-md-offset-3'>
        <h2>Register</h2>
        <form name='form' onSubmit={this.handleSubmit}>
          <div
            className={
              'form-group' + (submitted && !firstName ? ' has-error' : '')
            }
          >
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              className='form-control'
              name='firstName'
              value={firstName}
              onChange={this.handleChange}
            />
            {submitted && !firstName && (
              <div className='help-block'>First Name is required</div>
            )}
          </div>
          <div
            className={
              'form-group' + (submitted && !lastName ? ' has-error' : '')
            }
          >
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              className='form-control'
              name='lastName'
              value={lastName}
              onChange={this.handleChange}
            />
            {submitted && !lastName && (
              <div className='help-block'>Last Name is required</div>
            )}
          </div>
          <div
            className={'form-group' + (submitted && !email ? ' has-error' : '')}
          >
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              className='form-control'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            {submitted && !email && (
              <div className='help-block'>email is required</div>
            )}
          </div>
          <div
            className={
              'form-group' + (submitted && !password ? ' has-error' : '')
            }
          >
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              value={password}
              onChange={this.handleChange}
            />
            {submitted && !password && (
              <div className='help-block'>Password is required</div>
            )}
          </div>
          <div className='form-group'>
            <button className='btn btn-primary'>Register</button>
            {registering && (
              <img src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
            )}
            <Link to='/login' className='btn btn-link'>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register
};

const connectedRegister = connect(mapState, actionCreators)(Register);
export { connectedRegister as Register };
