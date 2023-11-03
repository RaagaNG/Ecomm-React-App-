import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import ShoppingPage from './ShoppingPage';
import CheckoutPage from './CheckoutPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/shopping" component={ShoppingPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </Router>
  );
};

export default App;
