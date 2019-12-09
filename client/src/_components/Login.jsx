/*The login page component renders a login form with username and password fields. 
It displays validation messages for invalid fields when the user attempts to submit 
the form. If the form is valid, submitting it causes the this.props.login(username, password) 
to be called, which dispatches the redux action userActions.login(username, password).
The constructor() function calls this.props.logout() which dispatches the userActions.logout() 
redux action to log the user out if they're logged in, this enables the login page to 
also be used as the logout page.*/

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { userService } from '../_services';

class Login extends React.Component {
  constructor(props) {
    super(props);

    //this.props.logout();

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

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }

  render() {
    const { loggingIn, loggedIn } = this.props;
    const { email, password, submitted } = this.state;
    return !loggedIn ? (
      <div className='col-md-6 col-md-offset-3'>
        <h2>Login</h2>
        <form name='form' onSubmit={this.handleSubmit}>
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
              <div className='help-block'>Email is required</div>
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
            <button className='btn btn-primary'>Login</button>
            {loggingIn && (
              <img src='data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==' />
            )}
            <Link to='/register' className='btn btn-link'>
              Register
            </Link>
          </div>
        </form>
      </div>
    ) : (
      <Redirect to='/dashboard' />
    );
  }
}

function mapState(state) {
  const { loggingIn, loggedIn } = state.authentication;
  return { loggingIn, loggedIn };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout
};

const connectedLogin = connect(mapState, actionCreators)(Login);
export { connectedLogin as Login };
