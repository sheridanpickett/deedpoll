import React, { useRef, useEffect, useState } from 'react';
import MainNav from './MainNav';
import Logo from './Logo'

export default () => {
  const target = useRef();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.0
    }
    const observer = new window.IntersectionObserver((entries, observer)=>{
      if(entries[0].isIntersecting) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
      console.log(entries);
      console.log('intersected');
    }, options);
    observer.observe(target.current)
    return () => observer.unobserve(target.current);
  }, [])

  return (
    <>
      <Logo />
      <div className="sentinal" ref={target}></div>
      <MainNav className={isSticky ? 'sticky' : 'not-sticky'} />
      <header>
        <h1 className="heading">UK Online Deed Poll</h1>
        <p>
          Yo, homeboy. Want to change your name lickety split? Course you do.
          Well now you can, with Frank's name change website 3000.
          Just a couple of clicks and you'll go from a Jeremy to a Julie, oh boy.
        </p>
      </header>
      <div className="section-one">
      </div>
    </>
  )
}
