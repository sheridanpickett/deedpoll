import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../components/MainNav';
import padlockSVG from '../padlock.svg';
import clockSVG from '../clock.svg';
import thumbSVG from '../thumb.svg';

export default () => {
  const sentinalOne = useRef();
  const sentinalTwo = useRef();

  const [sticky, setSticky] = useState(false);
  const [notVisible, setNotVisible] = useState(true);

  useEffect(() => {
    const options = {
      threshold: 0.0
    }
    const observer = new window.IntersectionObserver(entries => {
      entries.forEach((entry => {
        if(entry.target.className==='sentinal') {
          if(entry.isIntersecting) {
            setSticky(false);
          } else {
            setSticky(true);
          }
        }
        if(entry.target.className==='sentinal-two') {
          if(entry.isIntersecting) {
            setNotVisible(false)
          }
        }
      }))
    }, options);
    observer.observe(sentinalOne.current);
    observer.observe(sentinalTwo.current);
    return () => observer.unobserve(sentinalOne.current, sentinalTwo.current);
  }, [])

  return (
    <div className="Home">
      <MainNav className={sticky ? 'MainNav-sticky' : 'MainNav-not-sticky'}/>
      <div className="sentinal" ref={sentinalOne}></div>
      <div className="section-one">
        <div className="container-one">
          <h1 className="heading">UK Deed Poll Online</h1>
          <p className="text">
            Change your name in minutes, for only £3.99
          </p>
        </div>
        <div className="container-two">
          <Link className="g_link" to="/apply">Apply Now</Link>
          <a className="g_link" href="#learn-more">Learn More</a>
        </div>
      </div>

      <div className="section-two">
        <h2 className="heading">Why Deed Poll Online?</h2>
        <div>
          <div className={`img-container one ${notVisible ? 'not-visible' : 'visible'}`}>
            <img className="svg" alt="padlock image" src={padlockSVG} />
          </div>
          <div className="sentinal-two" ref={sentinalTwo}></div>
          <h3 className="subheading">Secure.</h3>
        </div>
        <div>
          <div className={`img-container two ${notVisible ? 'not-visible' : 'visible'}`}>
            <img className="svg" alt="clock image" src={clockSVG} />
          </div>
          <h3 className="subheading">Fast.</h3>
        </div>
        <div>
          <div className={`img-container three ${notVisible ? 'not-visible' : 'visible'}`}>
            <img className="svg" alt="thumbs up image" src={thumbSVG} />
          </div>
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
            <Link className="g_link" to="/info">More Info</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
