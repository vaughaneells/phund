import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Register.jsx';
import Sidebar from './components/Sidebar.jsx';
import Login from './components/Login.jsx';
import Build from './components/Build.jsx';
import Lend from './components/Lend.jsx';
import Borrow from './components/Borrow.jsx';
import Profile from './components/Profile.jsx';
import PrivateComponent from './components/PrivateComponent.jsx';
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
        <div id="dev_links">
          <Link to="/login">login</Link><br/>
          <Link to="/register">register</Link><br/>
          <Link to="/build">build</Link><br/>
          <Link to="/borrow">borrow</Link><br/>
          <Link to="/lend">lend</Link><br/>
          <Link to="/profile">profile</Link><br/>
        </div>
        <div id="main">
          <Route path = '/register' component={Register}></Route>
          <Route path = '/login' component={Login}></Route>
          <Route path = '/build' render={() => PrivateComponent(Build)}></Route>
          <Route path = '/borrow' render={() => PrivateComponent(Borrow)}></Route>
          <Route path = '/lend' render={() => PrivateComponent(Lend)}></Route>
          <Route path = '/profile' render={() => PrivateComponent(Profile)}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
