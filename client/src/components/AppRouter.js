import React from 'react';
import { Route } from 'react-router-dom';
import { Elements } from 'react-stripe-elements';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Apply from '../pages/Apply';
import Payment from '../pages/Payment';

export default () => {
  return (
    <>
      <Route path="/" exact component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/apply" component={Apply}/>
      <Elements>
        <Route path="/payment" component={Payment}/>
      </Elements>
    </>
  )
}
