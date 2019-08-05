import React from 'react';
import axios from 'axios';
import {CardNumberElement, CardExpiryElement, CardCvcElement, injectStripe} from 'react-stripe-elements';

const Payment = ({stripe}) => {

  const submit = async () => {
    try {
      const token = await stripe.createToken({name: "Name"});
      let res = await axios.post('http://ec2-3-8-122-36.eu-west-2.compute.amazonaws.com:5000/payment', { id: token.token.id });
      console.log(res);
    } catch(err) {
      console.log(err);
    }
  }

  const base = {
    fontWeight: 300,
    lineHeight: '40px',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSize: '1em',
    '::placeholder': {
      color: 'grey',
    }
  }

  return (
    <>
      <h1>Payment</h1>
      <label>Credit Card Number</label>
      <div>
        <CardNumberElement placeholder="Card Number" style={{base}} />
      </div>
      <label>Expiry Date</label>
      <CardExpiryElement style={{base}} />
      <label>CVC</label>
      <CardCvcElement style={{base}} />
      <button onClick={submit}>Submit</button>
    </>
  )
}

export default injectStripe(Payment);
