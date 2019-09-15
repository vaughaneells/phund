import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Build from './Build.jsx';
import Sidebar from './Sidebar.jsx';
import Lend from './Lend.jsx';
import Borrow from './Borrow.jsx';
import Profile from './Profile.jsx';
import PrivateComponent from './PrivateComponent.jsx';

const Dashboard = () => {
  console.log('DASHBOARD IS RENDERED!')
  return (
    <Router>
      <Sidebar />
      <div className="dev_links">
        <Link to="/build">build</Link><br />
        <Link to="/borrow">borrow</Link><br />
        <Link to="/lend">lend</Link><br />
        <Link to="/profile">profile</Link><br />
      </div>
      <div id="dashboard">
        <Route exact path='/build' render={() => PrivateComponent(Build)}></Route>
        <Route exact path='/borrow' render={() => PrivateComponent(Borrow)}></Route>
        <Route exact path='/lend' render={() => PrivateComponent(Lend)}></Route>
        <Route exact path='/profile' render={() => PrivateComponent(Profile)}></Route>
      </div>
    </Router>
  );
};

export default Dashboard;
