import React from 'react';
import { Route } from 'react-router-dom';
import { Elements } from 'react-stripe-elements';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Apply from '../pages/Apply';
import Privacy from '../pages/Privacy';
import Info from '../pages/Info';

export default () => {
  return (
    <>
      <Route path="/" exact component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/privacy" component={Privacy}/>
      <Route path="/info" component={Info} />
      <Elements>
        <Route path="/apply" component={Apply}/>
      </Elements>
    </>
  )
}
