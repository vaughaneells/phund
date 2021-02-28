import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from '../../../Redux/helpers';
import {
  BorrowEligible,
  BorrowUneligible,
  BorrowIntro,
  BorrowUnderwrite,
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
          <PrivateRoute
            exact
            path='/profilePage'
            // component={Profile}
            {...props}
          />
        </Switch>
      </Router>
    </div>
  );
};
