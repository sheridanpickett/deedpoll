import React from 'react';
import { Route } from 'react-router-dom';
import { Elements } from 'react-stripe-elements';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Payment from '../pages/Payment';

export default () => {
  return (
    <>
      <Route path="/" exact component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Elements>
        <Route path="/payment" component={Payment}/>
      </Elements>
    </>
  )
}
