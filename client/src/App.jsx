import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Register.jsx';
import Sidebar from './components/Sidebar.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import PrivateComponent from './components/PrivateComponent.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <div className="dev_links">
        <Link to="/login">login</Link><br />
        <Link to="/register">register</Link><br />
      </div>
      <div id="main">
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/dashboard' render={() => PrivateComponent(Dashboard)}></Route>
      </div>
    </Router>
  );
}

export default App;
