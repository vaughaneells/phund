import React from "react";
import { Layout, Menu, Divider, Row, Col } from "antd";
import { Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../../Redux/helpers";
import { userActions } from "../../Redux/actions";
import BottomFooter from './Borrow/utils/Landing/DivSix'
import DivFive from './Borrow/utils/Landing/DivFive'
import DivFour from './Borrow/utils/Landing/DivFour'
import DivThree from './Borrow/utils/Landing/DivThree'
import HeaderDiv from './Borrow/utils/Landing/HeaderDiv'
import DivOne from './Borrow/utils/Landing/DivOne'
import DivTwo from './Borrow/utils/Landing/DivTwo'




const { Header, Footer, Content } = Layout;


class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <Layout>       
              {/* { <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1">
                  <Link to="/login">login</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/register">register</Link>
                </Menu.Item>
              </Menu> } */}

              <HeaderDiv logout={this.props.logout} login={this.props.login} register={this.props.register}></HeaderDiv>
            
            <Content>
              <DivOne></DivOne>
            </Content>
            <Content
            style={{backgroundColor: '#2A2958'}}
            >
              <DivTwo>

              </DivTwo>
            </Content>
            <Content
            style={{backgroundColor: '#FFFFFF'}}
            >
              <DivThree></DivThree>
            </Content>
            <Content
            style={{backgroundColor: '#2A2958'}}
            >
              <DivFour>
              </DivFour>
            </Content>
            <Content
            style={{backgroundColor: '#FFFFFF'}}
            >
              <DivFive></DivFive>
            </Content>
              <BottomFooter>
              </BottomFooter>
          </Layout>
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
  logout: userActions.logout,
  login: userActions.login,
  register: userActions.register
};

const connectedLanding = connect(mapState, actionCreators)(Landing);
export { connectedLanding as Landing };
