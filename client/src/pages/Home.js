import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../components/MainNav';

export default () => {
  const target = useRef();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const current = target.current;
    const options = {
      threshold: 0.0
    }
    const observer = new window.IntersectionObserver((entries, observer)=>{
      if(entries[0].isIntersecting) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    }, options);
    observer.observe(target.current)
    return () => observer.unobserve(current);
  }, [])

  return (
    <div className="Home">
      <MainNav className={isSticky ? 'sticky' : 'not-sticky'}/>
      <div className="section-one">
        <div className="sentinal" ref={target}></div>
        <div className="container-one">
          <h1 className="heading">UK Deed Poll Online</h1>
          <p>
            Change your name in minutes, for only £3.99
          </p>
        </div>
        <div className="container-two">
          <Link className="">Adult Application Form</Link>
          <Link className="">Child Application Form</Link>
          <Link className="">Learn More</Link>
        </div>
      </div>
      <div className="section-two">
      </div>
    </div>
  )
}
