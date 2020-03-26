import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from '../../helpers';
import {
  BorrowEligible,
  BorrowUneligible,
  BorrowIntro,
  BorrowUnderwrite
} from '.';
import { PrivateRoute } from '../';

export const Borrow = ({ ...props }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <PrivateRoute
            exact
            path='/borrow'
            component={BorrowIntro}
            {...props}
          />
          <PrivateRoute
            path='/borrow/eligible'
            component={BorrowEligible}
            {...props}
          />
          <PrivateRoute
            path='/borrow/uneligible'
            component={BorrowUneligible}
            {...props}
          />
          <PrivateRoute
            exact
            path='/borrow/underwrite'
            component={BorrowUnderwrite}
            {...props}
          />
        </Switch>
      </Router>
    </div>
  );
};
