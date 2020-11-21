import React from "react";
<<<<<<< HEAD
import "antd/dist/antd.css";
import { Layout, Menu, Divider } from "antd";
=======
// import "antd/dist/antd.css";
import { Layout, Menu, Divider, Row, Col } from "antd";
>>>>>>> 2cb2f989e35c94a605ba670b7544619c58c826c2
import { Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../helpers";
import { userActions } from "../actions";
<<<<<<< HEAD


=======
import BottomFooter from './Borrow/utils/Landing/DivSix'
import DivFive from './Borrow/utils/Landing/DivFive'
import DivFour from './Borrow/utils/Landing/DivFour'



>>>>>>> 2cb2f989e35c94a605ba670b7544619c58c826c2
const { Header, Footer, Content } = Layout;

class Landing extends React.Component {
    constructor(props) {
        super(props);

<<<<<<< HEAD
        this.props.logout();
    }
    render() {
        return (
            <div>
                <Router history={history}>
                    <Layout>
                        <Header>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                                <Menu.Item key="1">
                                    <Link to="/login">login</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/register">register</Link>
                                </Menu.Item>
                            </Menu>
                        </Header>
                    </Layout>
                </Router>
            </div>
        );
    }
=======
    this.props.logout();
  }
  render() {

    
    return (
      <div>
        <Router history={history}>
          <Layout>
            <Header>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <Link to="/login">login</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/register">register</Link>
                </Menu.Item>
              </Menu>
            </Header>
            <Content>
              
            </Content>
            <Content>
              
            </Content>
            <Content>
              
            </Content>
            <Content
            style={{backgroundColor: "#2A2958"}}
            >
              <DivFour>
              </DivFour>
            </Content>
            <Content
            style={{backgroundColor: '#FFFFFF'}}
            >
              <DivFive></DivFive>
            </Content>
            <Footer>
              <BottomFooter>

              </BottomFooter>
            </Footer>
          </Layout>
        </Router>
      </div>
    );
  }
>>>>>>> 2cb2f989e35c94a605ba670b7544619c58c826c2
}

function mapState(state) {
    const { loggedIn } = state.authentication;
    return { loggedIn };
}

const actionCreators = {
<<<<<<< HEAD
    logout: userActions.logout,
=======
  logout: userActions.logout,
>>>>>>> 2cb2f989e35c94a605ba670b7544619c58c826c2
};

const connectedLanding = connect(mapState, actionCreators)(Landing);
export { connectedLanding as Landing };
