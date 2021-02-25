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
import socket from 'socket.io-client';


export const Borrow = ({ ...props }) => {
  var io = socket('http://localhost:3000');
  useEffect(() => {
    io.on('connection', () => {
      console.log('listening from Borrow')
    })
  })
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
