import React from 'react';
//import "antd/dist/antd.css";
//import { Layout, Menu  } from "antd";
import { Router, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { userActions } from '../actions';
import SVG from './SVG'

//const { Header, Footer, Content} = Layout;

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.props.logout();
  }
  render() {
    return (
      <div>
          <Router history={history}>

          </Router>
      </div>
    );
  }
}

function mapState(state) {
  const { loggedIn } = state.authentication;
  return { loggedIn };
}

const actionCreators = {
  logout: userActions.logout
};

const connectedLanding = connect(mapState, actionCreators)(Landing);
export { connectedLanding as Landing };
