/*The home page component is displayed after signing in to the application, 
it shows the signed in user's name plus a list of all registered users in 
the tutorial application. The users are loaded into redux state by calling 
this.props.getUsers() from the componentDidMount() react lifecycle hook, 
which dispatches the redux action userActions.getAll().Users can also be 
deleted from the user list, when the delete link is clicked it calls the 
this.props.deleteUser(id) function which dispatches the redux action 
userActions.delete(id).*/

import React, { useState } from 'react';
import { Router, Link } from 'react-router-dom';
import { Layout } from "antd";
import { connect } from 'react-redux';
import { userActions, alertActions } from '../actions';
import { history, userCookie } from '../helpers';
import Cookies from 'js-cookie';
import profilePage from '../../src/components/Profile/Profile'
import ProfilePage from '../../src/components/Profile/Profile';

const { Content } = Layout;
class Home extends React.Component {
  constructor(props) {
    super(props);
    const { loggedIn } = this.props;
    if (!loggedIn && Cookies.get('user') && Cookies.get('id_1')) {
      this.props.pageRefresh();
    }
    try {
      let user = userCookie();
      this.props.user(user);
    } catch (err) {
      this.props.error(err);
    }
  }
  

  render() {
    const { firstName, loggedIn } = this.props;
    console.log(this.props);

    if (loggedIn === true) {
      return (
          <div>
            <Layout>
                <Content style={{backgroundColor: '#2A2958', height:'900px'}}>
                  <ProfilePage firstName={firstName}></ProfilePage>
                </Content>

                
            </Layout>
          </div>
          
      )
      
    } else {
      return (
        <Router history={history}>
          <h1>Hello, {firstName}!</h1>
          <div>
            <Link to='/borrow'>Borrow</Link>
            <br />
            <Link to='/build'>Build</Link>
            <br />
            <Link to='/lend'>Lend</Link>
            <br />
            {/* <div>
              <Link to='/'>Logout</Link>
            </div> */}
            <div>
              <Link to='/test'>Test Component</Link>
            </div>
          </div>
          <div>
              <Link to='/'>Landing Page</Link>
          </div>
          <div>
            <Link to='/profile'>Signup</Link>
          </div>
          
  
        </Router>
      );
    }
  }
    }
    

function mapState(state) {
  const { firstName } = state.user;
  const { loggedIn } = state.authentication;
  return { firstName, loggedIn };
}

const actionCreators = {
  user: userActions.user,
  pageRefresh: userActions.pageRefresh,
  error: alertActions.error
};

const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };
