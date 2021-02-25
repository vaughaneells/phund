import React from 'react';
import { Router, Link } from 'react-router-dom';
import { history } from '../../../Redux/helpers';

export const BorrowUneligible = () => {
  return (
    <div>
      <Router history={history}>
        <h3>Unfortunately, Borrow is not support by your state yet.</h3>
        <p>Check out some Phund's other products!</p>
        <br />
        <Link to='/build'>Build</Link>
        <br />
        <Link to='/lend'>Lend</Link>
        <br />
        <Link to='/home'>Return Home</Link>
      </Router>
    </div>
  );
};
