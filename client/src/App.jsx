import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Register.jsx';
import Sidebar from './components/Sidebar.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import PrivateComponent from './components/PrivateComponent.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
<<<<<<< HEAD
import Plaid from './components/Plaid.jsx';
=======
>>>>>>> 5c4733470d2d25dc319b0d13533292f59b6b41f9

const App = () => {
  return (
    <Router>
      <Sidebar />
<<<<<<< HEAD
      <div className='dev_links'>
        <Link to='/login'>login</Link>
        <br />
        <Link to='/register'>register</Link>
        <br />
        <Link to='/plaid'>plaid</Link>
        <br />
      </div>
      <div id='main'>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/plaid' component={Plaid}></Route>

        <Route
          exact
          path='/dashboard'
          render={() => PrivateComponent(Dashboard)}
        ></Route>
=======
      <div className="dev_links">
        <Link to="/login">login</Link><br />
        <Link to="/register">register</Link><br />
      </div>
      <div id="main">
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/dashboard' render={() => PrivateComponent(Dashboard)}></Route>
>>>>>>> 5c4733470d2d25dc319b0d13533292f59b6b41f9
      </div>
    </Router>
  );
};

export default App;
