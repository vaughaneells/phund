import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <Router>
        <Sidebar />
        <Main />
      </Router>
    );
  }
}

export default App;
