import React, { useRef } from 'react';
import useCheckVisibility from '../hooks/useCheckVisibility';
import { Link } from 'react-router-dom';
import MainNav from '../components/MainNav';
import padlockPNG from '../padlock.png';
import clockPNG from '../clock.png';
import thumbPNG from '../thumb.png';

export default () => {
  const sentinalOne = useRef();
  const sentinalTwo = useRef();

  return (
    <div className="Home">
      <MainNav className={useCheckVisibility(sentinalOne, true) ? 'MainNav-not-sticky' : 'MainNav-sticky'}/>
      <div className="sentinal" ref={sentinalOne}></div>
      <div className="section-one">
        <div className="container-one">
          <h1 className="heading">UK Deed Poll Online</h1>
          <p className="text">
            Change your name in minutes, for only £3.99
          </p>
        </div>
        <div className="container-two">
          <Link className="global-link" to="/apply">Apply Now</Link>
          <a className="global-link" href="#learn-more">Learn More</a>
        </div>
      </div>

      <div className="section-two">
        <h2 className="heading">Why Deed Poll Online?</h2>
        <div className={`container  ${useCheckVisibility(sentinalTwo, false) ? 'visible' : 'not-visible'}`}>
          <img className="image" alt="padlock" src={padlockPNG} />
          <div className="sentinal-two" ref={sentinalTwo}></div>
          <h3 className="subheading">Secure.</h3>
        </div>
        <div className={`container  ${useCheckVisibility(sentinalTwo, false) ? 'visible' : 'not-visible'}`}>
          <img className="image" alt="clock" src={clockPNG} />
          <h3 className="subheading">Fast.</h3>
        </div>
        <div className={`container  ${useCheckVisibility(sentinalTwo, false) ? 'visible' : 'not-visible'}`}>
          <img className="image" alt="thumbs up" src={thumbPNG} />
          <h3 className="subheading">Simple.</h3>
        </div>
        <p className="text">
          Deed Poll Online is the quickest, easiest and safest way to change your name online.
          We'll send you your Deed Poll via our secure mail server, all you have to do is sign and date it.
        </p>
      </div>
      <hr className="divider" />

      <div className="section-three" id="learn-more">
        <h2 className="heading">How does it work?</h2>
        <div className="container">
          <h3 className="subheading">1</h3>
          <p className="text">Fill in an application form and wait for a confirmation email</p>
        </div>
        <div className="container">
          <h3 className="subheading">2</h3>
          <p className="text">Print off the pdf form you receive via email</p>
        </div>
        <div className="container">
          <h3 className="subheading">3</h3>
          <p className="text">Sign and date the form. Get two witnesses to sign the form</p>
        </div>
        <div className="container">
          <h3 className="subheading">4</h3>
          <p className="text">Send the form to all relevant record-holders</p>
        </div>
        <div className="container">
          <div className="subheading">
            <Link className="global-link" to="/info">More Info</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
