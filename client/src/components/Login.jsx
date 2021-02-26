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
import {store} from '../../Redux/helpers/store';
import { userActions } from '../../Redux/actions';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }

  render() {

    const { loggedIn } = this.props;
    const { email, password } = this.state;
    return !loggedIn ? (
      <div>

        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type='email'
            placeholder='Email'
            name='email'
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
          <button style={styles}>Login</button>
          <Link to='/register'>Register</Link>
        </form>
      </div>
    ) : (
      <Redirect to='/landing' />
    );
  }
}
const styles = {
  marginTop:"10",
  paddingTop: "15",
  paddingBottom: "15",
  marginLeft: "30",
  marginRight: "30",
  backgroundColor:'#3850B5',
  borderRadius: "25px",
  borderWidth: "1",
  color: "#ffffff",
  fontSize: '12px'
}

function mapState(state) {
  const { loggingIn, loggedIn } = state.authentication;
  return { loggingIn, loggedIn };
}

const actionCreators = {
  login: userActions.login
};

const connectedLogin = connect(mapState, actionCreators)(Login);
export { connectedLogin as Login };
