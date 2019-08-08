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
    const sentinalOneCurrent = sentinalOne.current;
    const sentinalTwoCurrent = sentinalTwo.current;
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
    observer.observe(sentinalOneCurrent);
    observer.observe(sentinalTwoCurrent);
    return () => observer.unobserve(sentinalOneCurrent, sentinalTwoCurrent);
  }, [])

  return (
    <div className="Home">
      <MainNav className={sticky ? 'sticky' : 'not-sticky'}/>
      <div className="section-one">
        <div className="sentinal" ref={sentinalOne}></div>
        <div className="container-one">
          <h1 className="heading">UK Deed Poll Online</h1>
          <p className="text">
            Change your name in minutes, for only £3.99
          </p>
        </div>
        <div className="container-two">
          <Link>Adult Application Form</Link>
          <Link>Child Application Form</Link>
          <Link>Learn More</Link>
        </div>
      </div>
      <div className="section-two">
        <h2 className="heading">Why Deed Poll Online?</h2>
        <div>
          <div className={`img-container one ${notVisible ? 'not-visible' : 'visible'}`}>
            <img className="svg" alt="padlock image" src={padlockSVG} />
          </div>
          <h3>Secure.</h3>
        </div>
        <div>
          <div className={`img-container two ${notVisible ? 'not-visible' : 'visible'}`}>
            <img className="svg" alt="clock image" src={clockSVG} />
          </div>
          <h3>Fast.</h3>
        </div>
        <div>
          <div className={`img-container three ${notVisible ? 'not-visible' : 'visible'}`}>
            <img className="svg" alt="thumbs up image" src={thumbSVG} />
          </div>
          <h3>Simple.</h3>
        </div>
        <p className="text">
          Deed Poll Online is the quickest, easiest and safest way to change your name online.
          We'll send you your Deed Poll via our secure mail server, all you have to do is sign and date it.
        </p>
      </div>
      <div className="sentinal-two" ref={sentinalTwo}></div>
      <div className="section-three">
      </div>
    </div>
  )
}
