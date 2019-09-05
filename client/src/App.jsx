import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Register.jsx';
import Sidebar from './components/Sidebar.jsx';
import Login from './components/Login.jsx';
import Build from './components/Build.jsx';
import Lend from './components/Lend.jsx';
import Borrow from './components/Borrow.jsx';
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
        <Main>
          <Route path = '/register' component={Register}></Route>
          <Route path = '/login' component={Login}></Route>
          <Route path = '/build' component={<PrivateComponent component={Build}/>}></Route>
          <Route path = '/borrow' component={<PrivateComponent component={Borrow}/>}></Route>
          <Route path = '/lend' component={<PrivateComponent component={Lend}/>}></Route>
        </Main>
      </Router>
    );
  }
}

export default App;
