import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register.jsx';
import Sidebar from './Sidebar.jsx';
import Login from './Login.jsx';
import Build from './Build.jsx';
import Lend from './Lend.jsx';
import Borrow from './Borrow.jsx';
import PrivateComponent from './PrivateComponent.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Sidebar/>
        <Main>
          <Route path = '/register' component={Register}></Route>
          <Route path = '/login' component={Login}></Route>
          <Route path = '/build' component={Build}></Route>
          <Route path = '/borrow' component={Borrow}></Route>
          <Route path = '/lend' component={Lend}></Route>
        </Main>
      </Router>
    );
  }
}

export default App;
