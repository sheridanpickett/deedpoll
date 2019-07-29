import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Elements } from 'react-stripe-elements';
import Home from './Home';
import About from './About';
import Payment from './Payment';

export default () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/payment">Payment</Link>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Elements>
        <Route path="/payment" component={Payment}/>
      </Elements>
    </div>
  )
}
